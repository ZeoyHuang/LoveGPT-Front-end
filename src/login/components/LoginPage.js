import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GoogleLoginButton from "./GoogleLoginButton";
import InsLoginButton from "./InsLoginButton";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  // handle login with username and password
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Logging in with username and password");
  };

  // Navigate to Profile page
  const handleButtonClick = () => {
    navigate('/profile');
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 7, mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Log In
        </Typography>
      </Box>

      {/* Google login */}
      <GoogleLoginButton />

      <Box sx={{ mt: 2 }} />

      {/* Instagram SSO */}
      <InsLoginButton />

      <Box sx={{ mt: 3, mb: 3 }}>
        <Typography variant="body1" component="p" gutterBottom>
          Or Sign in with
        </Typography>
      </Box>

      {/* username and password login */}
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Box sx={{ mt: 2 }} />

        <TextField
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box sx={{ mt: 2 }} />

        <Button variant="contained" type="submit" fullWidth onClick={handleButtonClick}>
          Sign in
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
