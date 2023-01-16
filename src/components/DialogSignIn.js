import React from 'react';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton, Slide, Tab,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {CloseSharp,} from "@mui/icons-material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {FormBox} from "./index";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogSignIn = ({open, handleClose}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [value, setValue] = React.useState('1');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return <Dialog
        fullScreen={fullScreen}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogContent>
            <DialogActions>
                <IconButton onClick={handleClose}>
                    <CloseSharp/>
                </IconButton>
            </DialogActions>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList centered onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Sign In" value="1"/>
                            <Tab label="Sign Up" value="2"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <FormBox/>
                    </TabPanel>
                    <TabPanel value="2">
                        <FormBox/>
                    </TabPanel>
                </TabContext>
            </Box>
        </DialogContent>

    </Dialog>
};


export default DialogSignIn;