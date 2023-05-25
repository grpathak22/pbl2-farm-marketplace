import styled from "styled-components";

export const Container = styled.li`

background-color: rgb(243, 241, 241);
display: flex;
flex-flow: row nowrap;
-webkit-box-pack: start;
justify-content: flex-start;
align-items: flex-start;
padding-top: 5%;

background-color: rgb(243, 241, 241);
display: flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: flex-start;
padding-top: 5%;

.blockItem {
  width: 80%;
  display: flex;
  place-content: center;
  border-radius: 4px;
  align-items: center;
  height: 329px;
  background: white;
  flex-flow: column nowrap;
  justify-content: center;

  div {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
  }
}

/* Update the styles for text elements */
p {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
}

.ImgItem{
    margin-top : 10px;
    width: 90px;
    height: 100%;
}

.btnItem {
    background: #C1DCE0;
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 66%;
    height: 40px;
    color: black;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-out;
  
    &:hover {
      background: #58F4D8;
      cursor: pointer;
      transform: scale(1.05);
    }
  
    &:focus {
      outline: none;
      box-shadow: 0 0 5px #58F4D8;
    }
  
    &:active {
      transform: scale(0.95);
    }
  }
  
  

  #btnAdd {
    background: #66ff33;
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 40%;
    height: 40px;
    color: black;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-out;
  
    &:hover {
      background: #66ff33;
      cursor: pointer;
      transform: scale(1.05);
    }
  
    &:focus {
      outline: none;
      box-shadow: 0 0 5px #58F4D8;
    }
  
    &:active {
      transform: scale(0.95);
    }
  }
  
  #btnRemove {
    background: rgb(234 110 110);
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 40%;
    height: 40px;
    color: black;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-out;
  
    &:hover {
      background: #FF4B4B;
      cursor: pointer;
      transform: scale(1.05);
    }
  
    &:focus {
      outline: none;
      box-shadow: 0 0 5px #FF4B4B;
    }
  
    &:active {
      transform: scale(0.95);
    }
  
    &.shake-animation {
      animation: shake 0.5s ease-in-out;
    }
  
    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-5px);
      }
      50% {
        transform: translateX(5px);
      }
      75% {
        transform: translateX(-5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  

#groupButtonCart{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

`;