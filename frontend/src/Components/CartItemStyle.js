import styled from 'styled-components';

export const Container = styled.li`

display: flex;
flex-flow: row nowrap;
-webkit-box-pack: start;
justify-content: flex-start;
align-items: flex-start;
padding-top: 2%;

.blockItem{
    width: -webkit-fill-available;
    display: flex;
    place-content: center space-around;
    border-radius: 4px;
    -webkit-box-align: center;
    align-items: center;
    height: 80px;
    background: #ddd9d9;;
    -webkit-box-pack: start;

}

.ImgItem{
    width: 86px;
    height: 58px;
    object-fit: revert;
    border-radius: 13%;
}

.btnItem{
    background: #58F4D8;
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 66%;
    height: 40px;
    color: black;
    font-weight: bold;
}

#ItemName{
    width: 100%;
    padding-left: 8%;
}
#btnAdd{
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
      background: #66ff10;
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

#btnRemove{
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
    width: 40%;
    -webkit-box-pack: justify;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
}

#ItemPrice{
    padding-left: 2%;
}

#blockItemLeft{
    display: flex;
    align-items: center;
    flex-direction: row;
}
`;