import React from 'react';
import {Avatar, Button, IconButton, Stack,} from "@mui/material";
import Box from "@mui/material/Box";
import {FacebookSharp, Google, Instagram, LockSharp,} from "@mui/icons-material";
import TextField from "@mui/material/TextField";


const social = [
    <FacebookSharp/>,
    <Instagram/>,
    <Google/>
];
const FormBox = ({avatar,bgcolor, title, children}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 400,
        }}>
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockSharp/>
            </Avatar>
            <Stack direction={'row'} alignContent={'center'} justifyContent={'center'} pt={2} pb={2}>
                {social.map((item, index) =>
                    <IconButton key={index}>
                        {item}
                    </IconButton>)}
            </Stack>
            <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="current-email"
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
            <Button variant={'contained'}>
                Sign In
            </Button>
        </Box>
    );
};

export default FormBox;