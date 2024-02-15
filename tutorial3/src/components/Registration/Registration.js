import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Grid, Paper, Snackbar, Alert } from "@mui/material";

function RegistrationForm() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState({});

  console.log(openSnackbar, "====");

  // Validation functions
  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.firstName.match(/^[a-zA-Z]+$/)) { 
      newErrors.firstName = "First Name should only contain letters.";
      formIsValid = false;
    }

    if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lastName = "Last Name should only contain letters.";
      formIsValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
      formIsValid = false;
    }

    if (
      !formData.password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/
      )
    ) {
      newErrors.password =
        "Password must contain at least 8 characters, including a number, a letter, and a special character.";
      formIsValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  //handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validateForm() + "  test");
    debugger;
    if (validateForm()) {
      setOpenSnackbar(true);
      console.log("Registration successful");

      //navigate loads a whole new page but the snackbar is still open on the registeration page and hence used setTimeout to show the notification for 1.5 seconds and then navigate to the profile page
      setTimeout(()=>{
        navigate("/profile", {
            state: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
            },
          }); 
      },1500)
      
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>
          <Typography variant="h4" align="center" gutterBottom>Registration</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  margin="normal"
                  autoComplete="lname"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  margin="normal"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
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
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  margin="normal"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={openSnackbar}
                >
                  Register Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registration successful!
        </Alert>
      </Snackbar>
    </>
  );
}

export default RegistrationForm;
