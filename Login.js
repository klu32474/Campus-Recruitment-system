import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, IconButton, Grid, Link } from '@mui/material';
import { AccountCircle, LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.css';

export default function Login({ store }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {       event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission

        axios.post('http://localhost:8081/check', {
            un: username,
            pw: password
        }).then((response) => {
            if (response.data !== "fail") {
                store.dispatch({ type: "login", data: { un: response.data.name, role: response.data.role } });
            } else {
                setErrorMessage('Invalid username or password');
            }
        }).catch((error) => {
            console.error('Error:', error);
            setErrorMessage('Something went wrong. Please try again later.');
        });
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} align="center">
                    <AccountCircle fontSize="large" />
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h5">Login</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="username"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            startAdornment: <AccountCircle />
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: <LockOutlined />,
                            endAdornment: (
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="body2">
                        <Link href="#" color="inherit">
                            Forgot Password?
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                </Grid>
                <Grid item xs={12} align="center">
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
