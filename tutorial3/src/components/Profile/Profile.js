import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Typography, TextField, Grid, Container } from '@mui/material';

const Profile = () => { 
    
const location = useLocation();
const { firstName, lastName, email } = location.state;

 return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={6} style={{ marginTop: '2rem', padding: '2rem' }}>
        <Typography variant="h4" al ign="center" gutterBottom>
          Profile Information
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              value={firstName}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              value={lastName}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Profile;
