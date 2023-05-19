import  React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const FormContainer = styled.div`
  text-align: center;
`;

const UserInput = styled.TextField`
  display: block;
  margin-bottom: 15px;
`;

const Register = () => {
    return <Container>
    <FormContainer>
        <h1>Registration</h1>
            <UserInput id="outlined-basic" label="Nickname" variant="outlined" />
            <UserInput id="outlined-basic" label="Email" variant="outlined" />
            <UserInput id="outlined-basic" label="Password" variant="outlined" />
            <UserInput variant="contained">Register</UserInput>  
        </FormContainer>
    </Container>
    
  };
  
  export default Register;