import React from 'react';
import MKBox from "../../../components/MKBox";
import {Container,Grid} from "@mui/material";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";

const ContentOne = () => {
    const bg1 = "/blog1.jpeg";
    const bg2 = "/crossfit.jpg";
    const bg3 = "/crossfit.jpg";
    const bg4 = "/crossfit.jpg";
    const bg5 = "/crossfit.jpg";
    const bg6 = "/crossfit.jpg";

    return (
        <MKBox component="section" py={6}>
            <Container>
                <Grid
                    container
                    item
                    xs={8}
                    flexDirection="column"
                    alignItems="center"
                    mx="auto"
                    textAlign="center"
                    mb={6}
                >
                    <MKBadge
                        badgeContent="co-working"
                        variant="contained"
                        color="info"
                        container
                        sx={{ mb: 1 }}
                    />
                    <MKTypography variant="h2" mb={1}>
                        Explore our places in London
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                        If you can&apos;t decide, the answer is no. If two equally difficult paths, choose the
                        one more painful in the short term (pain avoidance is creating an illusion of equality).
                    </MKTypography>
                </Grid>
                <Grid container spacing={3} minHeight="40vh">
                    <Grid item xs={5} sm={4}>
                        <MKBox
                            width="100%"
                            height="100%"
                            borderRadius="lg"
                            shadow="md"
                            sx={{
                                backgroundImage: `url(${bg1})`,
                                backgroundSize: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={7} sm={3}>
                        <MKBox
                            width="100%"
                            height="100%"
                            borderRadius="lg"
                            shadow="md"
                            sx={{
                                backgroundImage: `url(${bg2})`,
                                backgroundSize: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <MKBox
                            width="100%"
                            height="100%"
                            borderRadius="lg"
                            shadow="md"
                            sx={{
                                backgroundImage: `url(${bg3})`,
                                backgroundSize: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={7} sm={3}>
                        <MKBox
                            width="100%"
                            height="100%"
                            borderRadius="lg"
                            shadow="md"
                            sx={{
                                backgroundImage: `url(${bg4})`,
                                backgroundSize: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <MKBox
                            width="100%"
                            height="100%"
                            borderRadius="lg"
                            shadow="md"
                            sx={{
                                backgroundImage: `url(${bg5})`,
                                backgroundSize: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MKBox
                            width="100%"
                            height="100%"
                            borderRadius="lg"
                            shadow="md"
                            sx={{
                                backgroundImage: `url(${bg6})`,
                                backgroundSize: "cover",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
};

export default ContentOne;