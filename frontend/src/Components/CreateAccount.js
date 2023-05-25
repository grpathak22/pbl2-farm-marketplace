import { Link, useNavigate } from 'react-router-dom';
import logoMarket from "../Images/Logo_MarketPlace.png";
import { Container } from "./CreateAccountStyle";
import { AppContext } from './AppProvider';
// import '../Styles/createAccount.css';
import React, { useState } from 'react';

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('Customer');
  const [selectedProvince, setSelectedProvince] = useState('');

  const provinces = [
    { value: "AN", label: "Andaman and Nicobar Islands" },
    {value: "AP",label: "Andhra Pradesh"},
    {value: "AR",label: "Arunachal Pradesh"},
    {value: "AS",label: "Assam"},
    {value: "BR",label: "Bihar"},
    {value: "CG",label: "Chandigarh"},
    {value: "CH",label: "Chhattisgarh"},
    {value: "DH",label: "Dadra and Nagar Haveli"},
    {value: "DD",label: "Daman and Diu"},
    {value: "DL",label: "Delhi"},
    {value: "GA",label: "Goa"},
    {value: "GJ",label: "Gujarat"},
    {value: "HR",label: "Haryana"},
    {value: "HP",label: "Himachal Pradesh"},
    {value: "JK",label: "Jammu and Kashmir"},
    {value: "JH",label: "Jharkhand"},
    {value: "KA",label: "Karnataka"},
    {value: "KL",label: "Kerala"},
    {value: "LD",label: "Lakshadweep"},
    {value: "MP",label: "Madhya Pradesh"},
    {value: "MH",label: "Maharashtra"},
    {value: "MN",label: "Manipur"},
    {value: "ML",label: "Meghalaya"},
    {value: "MZ",label: "Mizoram"},
    {value: "NL",label: "Nagaland"},
    {value: "OR",label: "Odisha"},
    {value: "PY",label: "Puducherry"},
    {value: "PB",label: "Punjab"},
    {value: "RJ",label: "Rajasthan"},
    {value: "SK",label: "Sikkim"},
    {value: "TN",label: "Tamil Nadu"},
    {value: "TS",label: "Telangana"},
    {value: "TR",label: "Tripura"},
    {value: "UK",label: "Uttarakhand"},
    {value: "UP",label: "Uttar Pradesh"},
    {value: "WB",label: "West Bengal"}
  ];

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (phoneNumber.length !== 10) {
      setMessage('Mobile number must be 10 digits');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setMessage('Email must be valid');
      return;
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters');
      return;
    }
    const userData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Address: address,
      City: city,
      Province: selectedProvince,
      Password: password,
      PhoneNumber: phoneNumber,
      TypeAccount: selectedOption
    };

    fetch('http://localhost/backend/createAccount.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage('User created');
        
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('User not created');
      });
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
        <img src={logoMarket} className="farmLogin" alt="logo" />
        <h1>Create an account</h1>
        <form  className="createAccountForm" onSubmit={handleSubmit}>
            <label className = "labelCreateAccount" htmlFor="firstName">First Name </label> 
            <input className = "inputCreateAccount" type="text" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="lastName">Last Name </label> 
            <input className = "inputCreateAccount" type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="email">Email </label> 
            <input className = "inputCreateAccount" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="address">Address </label> 
            <input className = "inputCreateAccount" type="text" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="city">City </label> 
            <input className = "inputCreateAccount" type="text" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="productCategory">Province</label> 
            <select className = "inputCreateAccount" value={selectedProvince} onChange={handleProvinceChange}required>
                <option value=""></option>
                {provinces.map((province) => (
                    <option key={province.value} value={province.value}>
                    {province.label}
                    </option>
                ))}
            </select>
            <br/>
            <label className = "labelCreateAccount" htmlFor="phoneNumber">Phone Number </label> 
            <input className = "inputCreateAccount" type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="password">Password </label> 
            <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br/>
            <label className = "labelCreateAccount" htmlFor="confirmPassword">Confirm Password </label> 
            <input className = "inputCreateAccount" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br/>
            <div id='radioGroup'>
            <label className = "labelRadioCreateAccount" > Account type. </label> 
            <label className="inputCreateAccount">
            <input className="radioInput"  type="radio" value="Customer" checked={selectedOption === "Customer" } onChange={handleChange} />
             Customer </label>
            <label className="inputCreateAccount">
            <input className="radioInput" type="radio" value="Farmer" checked={selectedOption === "Farmer"} onChange={handleChange} name="options"/>
             Farmer </label>
            </div>
            <button type="submit">Create account</button>
            <p>{message}</p>
        </form>
        <Link className='linkTo' to="/login">Go back to Login</Link>
        </Container>
  );
};

export default CreateAccount;


