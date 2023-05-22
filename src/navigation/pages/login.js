import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from 'axios';
import api from './api/registerAndLoginApi'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const FormContainer = styled.div`
  text-align: center;
`;


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      // Handle the response as needed
      console.log('Login successful');
      navigate('/home');
    } catch (error) {
      // Handle the error response
      console.error('Login failed:', error);
    }
  };

    return <Container>
    <FormContainer>
        <h1>Login</h1>
          <form onSubmit={handleSubmit}>

            <TextField 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{display:'block', marginBottom:'15px'}} 
            id="outlined-basic"
             label="Email" 
             variant="outlined" 
             type='email' />

            <TextField
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
            sx={{display:'block', marginBottom:'15px'}} 
            id="outlined-basic" l
            label="Password" 
            variant="outlined" 
            type='password' />

            <Button sx={{display:'block', marginBottom:'15px'}} variant="contained" type='submit'>Login</Button>
            
          </form>  
        </FormContainer>
    </Container>
  };
  
  export default Login;