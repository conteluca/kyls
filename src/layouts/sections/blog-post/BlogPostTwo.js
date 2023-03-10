import React from 'react';
import MKBox from "../../../components/MKBox";
import {Container, Grid, Link, Stack} from "@mui/material";
import MKTypography from "../../../components/MKTypography";
import TransparentBlogCard from "../../../examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "../../../examples/Cards/BlogCards/BackgroundBlogCard";
const BlogPostTwo = () => {
    const post1 = "/fitness.jpg";
    const post2 = "/fitness.jpg";
    const post3 = "/fitness.jpg";
    const post4 = "/fitness.jpg";
    return (
        <MKBox component="section" py={2}>
            <Container>
                <Grid container item xs={12} lg={6}>
                    <MKTypography variant="h3" mb={6}>
                        Check my latest blogposts
                    </MKTypography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                            image={post1}
                            title="Rover raised $65 million"
                            description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                            action={{
                                type: "internal",
                                route: "/pages/blogs/author",
                                color: "info",
                                label: "read more",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                            image={post2}
                            title="MateLabs machine learning"
                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                            action={{
                                type: "internal",
                                route: "/pages/blogs/author",
                                color: "info",
                                label: "read more",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                            image={post3}
                            title="MateLabs machine learning"
                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                            action={{
                                type: "internal",
                                route: "/pages/blogs/author",
                                color: "info",
                                label: "read more",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <BackgroundBlogCard
                            image={post4}
                            title="Flexible work hours"
                            description="Rather than worrying about switching offices every couple years, you stay in the same place."
                            action={{
                                type: "internal",
                                route: "/pages/blogs/author",
                                label: "read more",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>

    );
};

export default BlogPostTwo;