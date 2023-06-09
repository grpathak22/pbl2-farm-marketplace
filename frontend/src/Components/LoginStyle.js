import styled from "styled-components";

export const Container = styled.div`

display: flex;
height: 100vh;
align-items: center;
text-align: center;
flex-direction: column;
justify-content: center;
background-color: #F3F1F1;

.farmLogin{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}
.formLogin{
    margin-top: 2%;
    min-width: 100%;
}
.loginInput {
    width: 20%;
    padding: 1px 10px;
    margin: 8px 0;
    box-sizing: border-box;
}
label{
    width: 7%;
    padding: 12px 12px 12px 0;
    display: inline-flex;
}
.linkTo {
  background-color: #66ff66;
  color: black;
  margin-top: -8px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
}

.linkTo:hover {
  background-color: #99ff99;
  color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


button{
    font-family: 'Helvetica', 'Arial', sans-serif;
    display: inline-block;
    font-size: 1em;
    padding: 1em 2em;
    margin-top: 30px;
    margin-bottom: 15px;
    -webkit-appearance: none;
    appearance: none;
    background-color: black;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    
    
    &:focus {
      outline: 0;
    }
    
    &:before, &:after{
      position: absolute;
      content: '';
      display: block;
      width: 140%;
      height: 100%;
      left: -20%;
      z-index: -1000;
      transition: all ease-in-out 0.5s;
      background-repeat: no-repeat;
    }
    
    &:before{
      display: none;
      top: -75%;
      background-image:  
        radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle,  transparent 20%, $button-bg 20%, transparent 30%),
      radial-gradient(circle, $button-bg 20%, transparent 20%), 
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle,  transparent 10%, $button-bg 15%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
    //background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 85% 30%;
    }
    
    &:after{
      display: none;
      bottom: -75%;
      background-image:  
      radial-gradient(circle, $button-bg 20%, transparent 20%), 
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle,  transparent 10%, $button-bg 15%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%),
      radial-gradient(circle, $button-bg 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
    //background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
   
    &:active{
      transform: scale(0.9);
      background-color: darken($button-bg, 5%);
      box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
    }
    
    &.animate{
      &:before{
        display: block;
        animation: topBubbles ease-in-out 0.75s forwards;
      }
      &:after{
        display: block;
        animation: bottomBubbles ease-in-out 0.75s forwards;
      }
    }
  }
  
  
  @keyframes topBubbles {
    0%{
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
      50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;}
   100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
  }
  
  @keyframes bottomBubbles {
    0%{
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;}
   100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
  }

`;