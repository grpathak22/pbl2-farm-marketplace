import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(243, 241, 241);
  
  #receipt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 41%;
    padding: 20px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .rowReceipt {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  .name {
    width: 40%;
    font-weight: bold;
    font-size: 14px;
  }

  .qty {
    width: 20%;
    text-align: center;
    font-size: 14px;
  }

  .itemPrice {
    width: 40%;
    text-align: right;
    font-size: 14px;
  }
`;
