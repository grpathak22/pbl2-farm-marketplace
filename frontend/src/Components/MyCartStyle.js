import styled from 'styled-components';

export const Container = styled.div`

background-color: rgb(243, 241, 241);
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
#myCart{
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    border-radius: 4px;
    background-color: white;
    padding: 2%;
    margin-top: 2%;
}
h1 {
    margin-top: 2%;
    min-width: 100%;
    text-align: center;
    margin-left: 2%;
}
.productList{
    width: 100%;
    padding-left: 0%;
}

#btnCheckout {
    background: #ff9933;
    color: black;
    margin-top: 2%;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  #btnCheckout:hover {
    background: #ffbf80;
    transform: scale(1.05);
  }
  
  #btnCheckout:focus {
    outline: none;
  }
  
  #btnCheckout:active {
    transform: scale(0.95);
  }
  

.checkout{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    border-radius: 4px;
    background-color: white;
    padding: 2%;
    margin-top: 2%;
}

.labelCheckout{
    width: 160px;
}

.rowCheckout{
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: 72%;
    height: 37%;
    padding-top: 12px;
    align-items: center;
}
.inputCheckout{
    width: 65%;
    height: 22px;
}

.inputMonthCheckout{
    width: 15%;
    height: 25px;
}
.inputYearCheckout{
    width: 15%;
    height: 25px;
}
`;