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
  height: 75vh;
`;

const FormContainer = styled.div`
  text-align: center;
`;

const ItemForm = () => {
    const [name, setName] = useState('');
    const [items, setItems] = useState('');
    const [cost, setCost] = useState('');
    const [notes, setNotes] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await api.post('/addBuild', {
          name,
          items,
          cost,
          notes,
        });
  
        console.log('Item added successfully');
  
      } catch (error) {
  
        console.error('Registration failed:', error);
  
      }
    };
  
      return <Container>
      <FormContainer>
          <h1>Add build</h1>
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
              value={items}
              onChange={(event) => setItems(event.target.value)} 
              sx={{display:'block', marginBottom:'15px'}} 
              id="outlined-basic" 
              label="Name" 
              variant="outlined" 
              />
  
              <TextField
              value={cost}
              onChange={(event) => setCost(event.target.value)} 
              sx={{display:'block', marginBottom:'15px'}} 
              id="outlined-basic" 
              label="Price" 
              variant="outlined" 
              type='number'
              />

              <TextField
              value={notes}
              onChange={(event) => setNotes(event.target.value)} 
              sx={{display:'block', marginBottom:'15px'}} 
              id="outlined-basic" 
              label="Price" 
              variant="outlined" 
              type='number'
              />
              
              <Button sx={{display:'block', marginBottom:'15px'}} variant="contained" type='submit'>Register</Button>  
              
            </form>
          </FormContainer>
      </Container>
  };
  
  export default ItemForm;