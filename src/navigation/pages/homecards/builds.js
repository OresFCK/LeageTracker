import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Builds = () => {
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate('/addItem');
  };
  const handleAddBuild = () => {
    navigate('/addBuild');
  };

  return (
    <div>
    <h1>Builds/Items</h1>
    <Container>
      <Button sx={{marginLeft:'25px', marginRight:'25px'}} variant='contained' onClick={handleAddItem}>Go to Add Item Form</Button>
      <Button sx={{marginLeft:'25px', marginRight:'25px'}} variant='contained' onClick={handleAddBuild}>Go to Add Build Form</Button>
    </Container>
    </div>
  );
};

export default Builds;