import styled from 'styled-components';

export const Container = styled.div`

body {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f3f1f1;
}

.formAddProduct,
h1 {
  margin-top: 2%;
  width: 100%;
  text-align: left;
  margin-left: 2%;
}

.inputAddProduct {
  width: 45%;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
}

.labelAddProduct {
  width: 18%;
  padding: 12px 0;
  display: inline-flex;
  align-items: center;
}

.linkTo {
  background-color: #0e60ff;
  color: white;
  margin-top: 2%;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.linkTo:hover {
  background-color: #0a4bbf;
}

button {
  background-color: #ff6600;
  color: black;
  margin-top: 2%;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #ff8000;
  color: white;
}


  .productItem{
    display: inline-grid;
  }

  .productFeedPage{
    display: grid;
  }

  #outProductCard{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  #leftProductCard{
  width: 60%;
  }

  #rightProductCard{
    
  }

  .ImgItem{
    width: 195px;
  }
`;