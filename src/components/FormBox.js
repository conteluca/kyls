import React from 'react';
import {Avatar, IconButton, Stack, styled, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {FacebookSharp, Google, Instagram,} from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const FormComponent = styled(Box)(({ theme }) =>({
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 16,
}));
const social = [
    <FacebookSharp/>,
    <Instagram/>,
    <Google/>
];
const FormBox = ({avatar,bgcolor, title, children}) => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <FormComponent>
                <Avatar sx={{m: 1, bgcolor: bgcolor}}>
                    {avatar}
                </Avatar>
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
                <Stack direction={'row'} alignContent={'center'} justifyContent={'center'} pt={2} pb={2}>
                    {social.map((item, index) =>
                        <IconButton key={index}>
                            {item}
                        </IconButton>)}
                </Stack>
                {children}
            </FormComponent>
        </Container>
    );
};

export default FormBox;