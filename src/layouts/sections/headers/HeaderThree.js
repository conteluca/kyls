import React from 'react';
import MKBox from "../../../components/MKBox";
import {Container, Grid, Link, Stack} from "@mui/material";
import MKTypography from "../../../components/MKTypography";
import MKButton from "../../../components/MKButton";
import {kNavItems} from "../../../components/constants";
import {useNavigate} from "react-router-dom";

const HeaderThree = () => {
    const bgImage = '/crossfit.jpg';
    let navigate = useNavigate();
    return (
        <MKBox component="header" position="relative">
            <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
                <Container>
                    <Grid container flexDirection="row" alignItems="center">
                        <MKTypography
                            component={Link}
                            href="#"
                            variant="button"
                            color="white"
                            fontWeight="regular"
                            py={0.8125}
                            mr={2}
                        >
                            Material Design
                        </MKTypography>
                        <MKButton
                            variant="outlined"
                            color="white"
                            sx={{display: {xs: "block", lg: "none"}, ml: "auto"}}
                        >
                            <MKBox component="i" color="white" className="fas fa-bars"/>
                        </MKButton>
                        <MKBox
                            component="ul"
                            display={{xs: "none", lg: "flex"}}
                            p={0}
                            my={0}
                            mx="auto"
                            sx={{listStyle: "none"}}
                        >
                            {kNavItems.map((item,index)=>
                                <MKBox key={index} component="li">
                                    <MKTypography
                                        component={Link}
                                        href="#"
                                        variant="button"
                                        color="white"
                                        fontWeight="regular"
                                        p={1}
                                        onClick={(e) => navigate(item.path)}
                                    >
                                        {item.name}
                                    </MKTypography>
                                </MKBox>
                            )}
                        </MKBox>
                        <MKButton color="default">buy now</MKButton>
                    </Grid>
                </Container>
            </MKBox>
            <MKBox
                display="flex"
                alignItems="center"
                minHeight="100vh"
                sx={{
                    backgroundImage: ({
                                          palette: {gradients},
                                          functions: {linearGradient, rgba}
                                      }) => `${linearGradient(rgba(gradients.dark.main, 0.4), rgba(gradients.dark.state, 0.4))}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        mx="auto"
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({breakpoints, typography: {size}}) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                            mb={3}
                        >
                            Work with an amazing
                        </MKTypography>
                        <MKTypography variant="body1" color="white" mt={1} mb={{xs: 3, sm: 8}} px={3}>
                            We&apos;re constantly trying to express ourselves and actualize our dreams. If you
                            have the opportunity to play this game. If you have the opportunity to play this game.
                        </MKTypography>
                        <MKTypography variant="h6" color="white" textTransform="uppercase" mb={3}>
                            connect with us on:
                        </MKTypography>
                        <Stack direction="row" spacing={6} mx="auto">
                            <MKTypography
                                component={Link}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-facebook"/>
                            </MKTypography>
                            <MKTypography
                                component={Link}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-instagram"/>
                            </MKTypography>
                            <MKTypography
                                component={Link}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-twitter"/>
                            </MKTypography>
                            <MKTypography
                                component={Link}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-google-plus"/>
                            </MKTypography>
                        </Stack>
                    </Grid>
                </Container>
            </MKBox>
        </MKBox>
    );
};

export default HeaderThree;