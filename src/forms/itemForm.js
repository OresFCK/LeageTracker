import  React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from 'axios';
import api from './apis/formapi'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const FormContainer = styled.div`
  text-align: center;
`;

const ItemForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await api.post('/addItem', {
          name,
          price,
        });
  
        console.log('Item added successfully');
  
      } catch (error) {
  
        console.error('Registration failed:', error);
  
      }
    };
  
      return <Container>
      <FormContainer>
          <h1>Add item</h1>
            <form onSubmit={handleSubmit}>
  
              <TextField
              value={name}
              onChange={(event) => setName(event.target.value)} 
              sx={{display:'block', marginBottom:'15px'}} 
              id="outlined-basic" 
              label="Name" 
              variant="outlined" 
              />
  
              <TextField
              value={price}
              onChange={(event) => setPrice(event.target.value)} 
              sx={{display:'block', marginBottom:'15px'}} 
              id="outlined-basic" 
              label="Price" 
              variant="outlined" 
              type='number'
              />
              
              <Button sx={{display:'block', marginBottom:'15px'}} variant="contained" type='submit'>Add item</Button>  
              
            </form>
          </FormContainer>
      </Container>
  };
  
  export default ItemForm;