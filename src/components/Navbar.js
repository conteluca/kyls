import React, {useEffect, useState} from "react";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
} from "@mui/material";
import {MenuSharp} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {BrandComponent, CustomDrawer, DialogSignIn} from "./index";

const navbarItems = ['About', 'Groups', 'Price', 'Contacts'];

const Navbar = () => {
    const [appBarColor, setAppBarColor] = useState('transparent');
    const [appBarTextColor, setAppBarTextColor] = useState('#ffffff');
    const navigate = useNavigate();
    const [dialogState, setDialogState] = React.useState(false);
    const [drawerState, setDrawerState] = React.useState(false);
    const openDialog = () => {
        setDialogState(true);
    };
    const closeDialog = () => {
        setDialogState(false);
    };
    useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 99 ||
                document.body.scrollTop > 99
            ) {
                setAppBarColor("inherit");
                setAppBarTextColor('#000000');
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setAppBarColor("transparent");
                setAppBarTextColor('#ffffff');
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerState(open);
    };
    return (
        <AppBar color={appBarColor} elevation={0}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="open drawer"
                    sx={{mr: 2, color: appBarTextColor}}
                    onClick={toggleDrawer('left', true)}
                >
                    <MenuSharp/>
                </IconButton>
                <CustomDrawer
                    items={navbarItems}
                    anchor={'left'} drawerState={drawerState} toggleDrawer={toggleDrawer}/>
                <BrandComponent color={appBarTextColor} title={'KYLS'}/>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                    {navbarItems.map((value, index) =>
                        <Button key={index} sx={{color: appBarTextColor}}>{value}</Button>)}
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <DialogSignIn open={dialogState} handleClose={closeDialog}/>
                <Button
                    variant={'outlined'}
                    color={'white'}
                    onClick={openDialog}
                    sx={{
                        borderColor: appBarTextColor,
                        borderRadius: 20,
                        color: appBarTextColor
                    }}
                >
                    Sign In
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;