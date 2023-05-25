import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Container } from './ReceiptStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from './AppProvider';

const Receipt = () => {
  const { url } = useContext(AppContext);

  const location = useLocation();
  const orderId = location.state?.orderId;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderItem, setOrderItem] = useState([]);

  const getUser = useCallback(async () => {
    const id = sessionStorage.getItem('id');
    await fetch(url + 'getUserById.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UserId: id,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setName(data.FirstName + ' ' + data.LastName);
      })
      .catch(() => alert('error fetch'));
  }, [url]);

  const getOrder = useCallback(async () => {
    await fetch(url + 'getOrderById.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        OrderId: orderId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDate(data.OrderDate);
        setOrderItem(data.OrderItem);
        setSubTotal(data.SubTotal);
        setTax(data.Tax);
        setTotalPrice(data.TotalPrice);
      })
      .catch(() => alert('error fetch'));
  }, [orderId, url]);

  useEffect(() => {
    if (!sessionStorage.getItem('id')) {
      navigate('/');
    }
    getUser();
    getOrder();
  }, [getOrder, getUser, navigate]);
  
  const totalAmount = parseInt( totalPrice) + parseInt(totalPrice) * 0.18;

  return (
    <Container>
      <h2>Receipt</h2>
      <div id="receipt">
        <p>Name: {name}</p>
        <p>Date: {date}</p>
        {orderItem.map((item, key) => {
          return (
            <div key={item.ProductID} className="rowReceipt">
              <p className="name">{item.ItemName}</p>
              <p className="qty">{item.ItemQuantity}</p>
              <p className="itemPrice">₹ {item.ItemPrice}</p>
            </div>
          );
        })}
        <p>Sub-total: ₹ {subTotal}</p>
        <p>Tax: 18%</p>
        <p>Total price: ₹ {totalAmount}</p>
      </div>
    </Container>
  );
};

export default Receipt;
