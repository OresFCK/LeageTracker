import  React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from 'axios';
import api from './api/registerAndLoginApi'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const FormContainer = styled.div`
  text-align: center;
`;

const Register = () => {

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/register', {
        nickname,
        email,
        password,
      });

      console.log('User registered successfully');

    } catch (error) {

      console.error('Registration failed:', error);

    }
  };

    return <Container>
    <FormContainer>
        <h1>Registration</h1>
          <form onSubmit={handleSubmit}>

            <TextField
            value={nickname}
            onChange={(event) => setNickname(event.target.value)} 
            sx={{display:'block', marginBottom:'15px'}} 
            id="outlined-basic" 
            label="Nickname" 
            variant="outlined" 
            />

            <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
            sx={{display:'block', marginBottom:'15px'}} 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            type='email'
            />
            
            <TextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}  
            sx={{display:'block', marginBottom:'15px'}} 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            type='password'
            />

            <Button sx={{display:'block', marginBottom:'15px'}} variant="contained" type='submit'>Register</Button>  
            
          </form>
        </FormContainer>
    </Container>
    
  };
  
  export default Register;