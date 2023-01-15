import React, {useEffect, useState} from "react";
import {AppBar, Box, Button, IconButton, Link, Toolbar, Typography} from "@mui/material";
import {MenuSharp} from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {useNavigate} from "react-router-dom";

const navbarItems = ['About', 'Groups', 'Price', 'Contacts'];


const Navbar = (props) => {
    const [appBarColor, setAppBarColor] = useState('transparent');
    const [appBarTextColor, setAppBarTextColor] = useState('#ffffff');
    const navigate = useNavigate();
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
    return (
        <AppBar color={appBarColor} elevation={0}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="open drawer"
                    sx={{mr: 2, color: appBarTextColor}}
                >
                    <MenuSharp/>
                </IconButton>
                <Link underline={"none"} component={'button'} onClick={()=>navigate('/')}>
                    <Typography
                        variant="h6"
                        noWrap
                        // component="div"
                        fontWeight={"bold"}
                        color={appBarTextColor}
                    >
                        KYLS
                    </Typography>
                </Link>

                <Box sx={{flexGrow: 1}}/>
                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                    {navbarItems.map((value, index) =>
                        <Button key={index} sx={{color: appBarTextColor}}>{value}</Button>)}
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <Button
                    variant={'outlined'}
                    color={'white'}
                    onClick={()=> navigate('/login')}
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

function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default Navbar;