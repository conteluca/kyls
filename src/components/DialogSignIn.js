import React from 'react';
import {
    Box,
    Button, Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControlLabel, Grid, IconButton, Link, Slide, TextField,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {FormBox} from "./index";
import {CloseSharp, LockSharp} from "@mui/icons-material";
import BackgroundImage from "./BackgroundImage";
import {useNavigate} from "react-router";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogSignIn = ({open, handleClose}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (<Dialog
            fullScreen={fullScreen}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <DialogActions>
                    <IconButton>
                        <CloseSharp/>
                    </IconButton>
                </DialogActions>
                <FormBox avatar={<LockSharp/>} title={'Sign In'} bgcolor={'secondary.main'}>
                    <Box component="form" onSubmit={() => console.log('submit')} noValidate sx={{mt: 1}}>
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

            </DialogContent>
        </Dialog>
    );
};


export default DialogSignIn;