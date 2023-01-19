import React from 'react';
import HeaderThree from "../layouts/sections/headers/HeaderThree";
import FeatureOne from "../layouts/sections/features/FeatureOne";
import DefaultNavbar from "../examples/Navbars/DefaultNavbar";
import {kNavItems} from "../components/constants";
import MKBox from "../components/MKBox";
import Card from "@mui/material/Card";
import Contact from "../layouts/contact/Contact";
import FooterTwo from "../layouts/sections/footers/FooterTwo";
import FooterOne from "../layouts/sections/footers/FooterOne";
import BlogPostTwo from "../layouts/sections/blog-post/BlogPostTwo";
import ProfileOne from "../layouts/sections/profile/ProfileOne";

const ProfilePage = () => {
    const bgImage = '/crossfit.jpg'
    return (<div>
        <DefaultNavbar routes={kNavItems}
                       action={{
                           type: "external",
                           route: "https://www.creative-tim.com/product/material-kit-react",
                           label: "free download",
                           color: "info",
                       }}
                       transparent
                       light
        />
        <MKBox bgColor={'white'}>
            <MKBox
                minHeight="25rem"
                width="100%"
                sx={{
                    backgroundImage: ({functions: {linearGradient, rgba}, palette: {gradients}}) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.8),
                            rgba(gradients.dark.state, 0.8)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}/>
            <Card
                sx={{
                    p: 2,
                    mx: {xs: 2, lg: 3},
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({palette: {white}, functions: {rgba}}) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({boxShadows: {xxl}}) => xxl,
                }}
            >
                <ProfileOne/>
                <BlogPostTwo/>
            </Card>
            <Contact/>
            <FooterOne/>
        </MKBox>
    </div>);
};

export default ProfilePage;