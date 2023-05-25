import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    height: 7em;

    img{
        width: 18%;
    }
    #searchProducts{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    #informationUser{
        display: flex;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        flex-flow: row nowrap;
    }

    #seacrhProducts{
    width: 40%;

}

#inpSearch{
    width: 100%;
    height: 35px;
    font-size:medium;
    border-radius: 4px;
    border-style: groove;
    border-color: #14d7b3;
}

#Icon-Search{
    width: 20%;
}
#btnSearch {
    display: flex;
    background: #061a00;
    border-radius: 4px;
    border: none;
    color: white;
    align-items: center;
    justify-content: space-around;
    font-size: medium;
    width: 50%;
    height: 40px;
    margin-left: 55px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  #btnSearch::before,
  #btnSearch::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
  }
  
  #btnSearch::before {
    left: -100%;
  }
  
  #btnSearch::after {
    right: -100%;
  }
  
  #btnSearch:hover {
    background-color: #a6cfd7;
  }
  
  #btnSearch:hover::before {
    transform: translateX(100%);
  }
  
  #btnSearch:hover::after {
    transform: translateX(-100%);
  }
  
#informationUser{
    width: 10%;
   
}

#Icon-Profile{
    width: 25%;
}

#informationCart{
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 20%;
    align-items: center;
    align-content: space-around;
}

#Icon-Cart{
    padding-right: 2%;
}

#cartPrice{
    padding-right: 10%;
}

#btnCheckout {
    background-color: #94b405;
    color: white;
    height: 40px;
    width: 48%;
    border: none;
    border-radius: 4px;
    font-size: medium;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  }
  
  #btnCheckout:hover {
    background-color: #ff9933;
    transform: scale(1.05);
  }
  
  #btnCheckout:focus {
    outline: none;
  }
  
  #btnCheckout:active {
    transform: scale(0.95);
  }
  
.btnItem{
    background: #14d7b3;
    color: black;
    margin-top: 2%;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
}

`;