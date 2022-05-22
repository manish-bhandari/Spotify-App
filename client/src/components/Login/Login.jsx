import React from 'react'
import styled from 'styled-components';

const StyledLoginButton = styled.a`
  background-color: green;
  color: white;
  padding: 10px 20px;
  margin: 20px auto;
  border-radius: 30px;
  display: inline-block;
`;

const Login = () => {
  return (
    <section className="login_section">
      <StyledLoginButton
        className="App-link"
        href="http://localhost:8888/login"
      >
        Log in to Spotify
      </StyledLoginButton>
    </section>
  );
}

export default Login