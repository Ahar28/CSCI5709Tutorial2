import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Grid, Paper, Alert } from "@mui/material";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // to Reset the error message whenever a  new submission is made
    try {
      const response = await fetch('https://express-t4.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      navigate('/profile-listing');
    } catch (error) {
      setError(error.message);
    }
  };

  //style and design of the login form taken from Tutorial 3
  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>
          <Typography variant="h4" align="center" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  margin="normal"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <br></br>
          {error && <Alert severity="error" style={{ marginBottom: '16px' }}>{error}</Alert>}
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
