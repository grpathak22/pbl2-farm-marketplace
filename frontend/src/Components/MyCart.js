import React, {useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { Container } from './MyCartStyle';
import { AppContext } from './AppProvider'
// import '../Styles/productFeed.css';

const MyCart = () =>   {

const { url, cart, setCart , cartPrice, setCartPrice} = useContext(AppContext);

const focusPayment = useRef(null);
const navigate = useNavigate();

const currentDate = new Date();
const [numberCard, setNumberCard] = useState('');
const [selectedMonth, setSelectedMonth] = useState('');
const [selectedYear,setSelectedYear] = useState('')
const [year, setYear] = useState('');
const [checkout, setCheckout] = useState(false);
const [userId, setUserId] = useState('');
const [userProvince, setUserProvince] = useState('');
const [message, setMessage] = useState('');

const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ];
  const years = [
    2023 ,
    2024 ,
    2025 ,
    2026 ,
    2027 ,
    2028 ,
    2029 ,
    2030 ,
    2031 ,
    2032 ,
    2033 ,
    2034 ,
    2035 ,
    2036 ,
    2037 ,
    2038 ,
    2039 
  ]


const handleMonthChange = event => {
    event.preventDefault();
    setSelectedMonth(event.target.value);
    if(numberCard.length !==16 ){
        setMessage('Enter valid Credit Card Number ')
        return;
    }
}
const handleYearChange = event => {
    event.preventDefault();
    setSelectedYear(event.target.value);
}

const getUser = async() =>{
    const id = sessionStorage.getItem("id");
    setUserId(id);
    await fetch(url + 'getUserById.php', {
    // await fetch('http://localhost/backend/getUserById.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserId: id
            }) 
        })
        .then( (response) => {
            return response.json()
        }).then( (data) => {
            setUserProvince(data.Province);
            
        }).catch(() => alert('error fetch'));
        
}

useEffect(() => {
    if (focusPayment.current) {
      focusPayment.current.focus();
      getUser();
    }
  }, [checkout]);

const calculateTotalPrice = () => {
    const totalTax = cartPrice;
    const newTotalPrice = (Number(cartPrice)).toFixed(2);

    return {totalTax, newTotalPrice}

}
const goToCheckout = () =>{

    if(!sessionStorage.getItem("id")){
        navigate('/login');
    }
    setCheckout(true);
}

  const handleSubmit = async event => {
    event.preventDefault();
    
    const {totalTax,newTotalPrice} = calculateTotalPrice();

    fetch(url + 'createOrder.php', {
    // fetch('http://localhost/backend/createOrder.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            UserId: userId,
            OrderDate: currentDate,
            Tax: totalTax,
            SubTotal: cartPrice,
            TotalPrice: newTotalPrice,
            CartItem: cart

        }) 
    })
    .then( (response) => {
        return response.json()
    }).then( (data) => {
        alert("order placed successfully! " + data.OrderId);
        setCartPrice(0);
        sessionStorage.setItem("totalPrice", 0);
        sessionStorage.removeItem("myCart");
        setCart({});
        navigate('/receipt',{state:{orderId: data.OrderId}});
    }).catch(() => 'Order not created');

  }


    return (
        <Container>
            <div id='myCart'>
                <h1>My Cart</h1>
                <p>My items:</p>
                <ul className='productList'>
                    {Object.entries(cart).map(([key,product]) => (<CartItem className="productItem" key={key} productItem = {product} 
                    />))}
                </ul>
                <p>Sub-total price: ₹ {cartPrice}</p>
                <button id="btnCheckout" onClick={()=> goToCheckout()}>Proceed to checkout</button>
            </div>
            {checkout &&
                    <form ref={focusPayment} tabIndex={-1} className="checkout" onSubmit={handleSubmit}>
                        <h2> Payment method</h2>
                        <div className='rowCheckout'>
                            <label className = "labelCheckout" htmlFor="inputNumberCard">Credit Card Number: </label> 
                            <input className = "inputCheckout" type="text" name="nainputNumberCardme" placeholder="0000-0000-0000-0000" value={numberCard}  onChange={(e) => setNumberCard(e.target.value)} />
                        </div>
                        <div className='rowCheckout'>
                        <label className = "labelCheckout" htmlFor="inputMonth">Expire Month: </label> 
                            <select className = "inputMonthCheckout" value={selectedMonth} onChange={handleMonthChange}>
                                <option value=""></option>
                                {months.map((month) => (
                                    <option key={month} value={month}>
                                    {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='rowCheckout'>
                            <label className = "labelCheckout" htmlFor="inputYear">Expire Year: </label> 
                            <select className='inputYearCheckout' value={selectedYear} onChange={handleYearChange}>
                                <option value=""></option>
                                {
                                    years.map((year) => (
                                        <option key = {year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    <button id="btnCheckout" type="submit">Make payment </button>
                    <p className="validationMessage">{message}</p>
                </form>
            }
        </Container>
        
    );
}

   export default MyCart; 

