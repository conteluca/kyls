import React from 'react';
import {FormBox, Navbar} from "../components";
import BackgroundImage from "../components/BackgroundImage";
import {
    Box,
    Button,
     Checkbox,
     FormControlLabel, Grid,
     Link,
    TextField,
} from "@mui/material";
import {LockSharp} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <div>
            <BackgroundImage image={'/crossfit.jpg'}>
                <Navbar/>
                    <FormBox avatar={<LockSharp/>} title={'Sign In'} bgcolor={'secondary.main'}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container spacing={1}>
                                <Grid item md>
                                    <Link onClick={() => navigate('/reset')} variant="body2" underline={"none"}
                                          component={"button"}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item md>
                                    <Link onClick={() => navigate('/signup')} variant="body2" underline={"none"}
                                          component={"button"}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </FormBox>
            </BackgroundImage>
        </div>
    );
};

export default LoginPage;