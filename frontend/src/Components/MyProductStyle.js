import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column; 
   
    table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 80%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    
    th {
        /* border-bottom: 1px solid black; */
        background-color: rgb(20, 215, 179);
        color: white;
        padding: 12px 15px;
        text-align: left;
    }
    tr:hover {
        background-color: rgb(20, 215, 179);
        color: white;
        border-bottom: 1px solid #dddddd;
    }
    td {
        background-color: white;
        color: black;
        text-align: left;
        padding: 12px 15px;
    }

    button {
    
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
    /* .btnLogin{
        background: #14d7b3;
    } */
    #btnDelete{
        background: rgb(234 110 110);
    }
`;