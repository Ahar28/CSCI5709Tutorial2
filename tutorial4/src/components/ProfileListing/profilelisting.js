import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

function ProfileListing() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://express-t4.onrender.com/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (userId) => {
    navigate(`/profiledetail/${userId}`); 
  };


  return (
    <Container>
      <TextField
        fullWidth
        label="Search by First Name or Last Name"
        variant="outlined"
        margin="normal"
        onChange={handleSearchChange}
      />
      <Grid container spacing={4}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user._id} onClick={() => handleCardClick(user._id)} >
            <Card style={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="140"
                image={user.picture}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProfileListing;
