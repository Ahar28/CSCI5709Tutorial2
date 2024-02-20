import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

function ProfileDetail() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
      const data = await response.json();
      setUserDetails(data);
    };

    fetchUserDetails();
  }, [id]);

  if (!userDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Card>
            <CardMedia
            component="img"
            height="300"
            image={userDetails.picture}
            alt={`Profile of ${userDetails.name}`}
            />
            <CardContent>
            <Typography gutterBottom variant="h4" component="div">
                {userDetails.name}
            </Typography>

            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Email:</Typography>
            <Typography variant="body1" gutterBottom>{userDetails.email}</Typography>

            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Phone:</Typography>
            <Typography variant="body1" gutterBottom>{userDetails.phone}</Typography>

            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Company:</Typography>
            <Typography variant="body1" gutterBottom>{userDetails.company}</Typography>
            
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Address: </Typography>
            <Typography variant="body1" gutterBottom>{userDetails.address}</Typography>
            
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Age:</Typography>
            <Typography variant="body1" gutterBottom>{userDetails.age}</Typography>
            
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Gender:</Typography>
            <Typography variant="body1" gutterBottom>{userDetails.gender}</Typography>
            
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>About: </Typography>
            <Typography variant="body1" gutterBottom>{userDetails.about}</Typography>
            
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Favourite Fruit: </Typography>
            <Typography variant="body1" gutterBottom>{userDetails.favoriteFruit}</Typography>
            
            </CardContent>
        </Card>
      </Grid>
      </Grid>
    </Container>
  );
}

export default ProfileDetail;