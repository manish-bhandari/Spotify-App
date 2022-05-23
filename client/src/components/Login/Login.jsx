import React from 'react'
import styled from 'styled-components';
import './Login.css'

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://spotify-profile-visualizer-app.herokuapp.com/login";
    
    
const StyledLoginButton = styled.a`
  background-color: var(--green);
  display: inline-block;
  color: rgb(255, 255, 255);
  border-radius: 30px;
  padding: 17px 35px;
  margin: 20px 0px 70px;
  min-width: 160px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    background-color: rgb(67, 216, 119);
  }
`;

const Login = () => {
  return (
    <section className="login_section">
      <h1>Spotify Profile</h1>
      <StyledLoginButton className="App-link" href={LOGIN_URI}>
        Log in to Spotify
      </StyledLoginButton>
    </section>
  );
}

export default Login