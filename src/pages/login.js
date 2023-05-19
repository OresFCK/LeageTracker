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

const Login = () => {
    return <Container>
    <FormContainer>
        <h1>Login</h1>
            <UserInput id="outlined-basic" label="Email" variant="outlined" />
            <UserInput id="outlined-basic" label="Password" variant="outlined" />
            <UserInput variant="contained">Login</UserInput>  
        </FormContainer>
    </Container>
  };
  
  export default Login;