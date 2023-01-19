import React from 'react';
import FeatureOne from "../layouts/sections/features/FeatureOne";
import FeaturesTwo from "../layouts/sections/features/FeaturesTwo";
import FeaturesThree from "../layouts/sections/features/FeaturesThree";
import PricingOne from "../layouts/sections/pricing/PricingOne";
import BlogPostOne from "../layouts/sections/blog-post/BlogPostOne";
import StatsOne from "../layouts/sections/stats/StatsOne";
import StatsTwo from "../layouts/sections/stats/StatsTwo";
import PreFooterOne from "../layouts/sections/prefooter/PreFooterOne";
import FooterOne from "../layouts/sections/footers/FooterOne";
import HeaderOne from "../layouts/sections/headers/HeaderOne";
import ContentOne from "../layouts/sections/contents/ContentOne";
import NavbarDark from "../layouts/sections/navbars/dark/NavbarDark";
import MKBox from "../components/MKBox";
import NavbarTransparent from "../layouts/sections/navbars/transparent/NavbarTransparent";
import NavbarBlur from "../layouts/sections/navbars/blur/NavbarBlur";
import NavbarLight from "../layouts/sections/navbars/light/NavbarLight";
import DefaultNavbar from "../examples/Navbars/DefaultNavbar";
import {kNavItems} from "../components/constants";
import Card from "@mui/material/Card";
import ProfileOne from "../layouts/sections/profile/ProfileOne";
import BlogPostTwo from "../layouts/sections/blog-post/BlogPostTwo";


const HomePage = () => {
    const bgImage = '/crossfit.jpg';
    return (
        <div>
            <DefaultNavbar routes={kNavItems}
                           transparent
                           light
                           action={{
                               type: "external",
                               route: "https://www.creative-tim.com/product/material-kit-react",
                               label: "Sign In",
                               color: "info",
                           }}

            />
            <MKBox
                minHeight="40rem"
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
                <FeatureOne/>
                <ContentOne/>
                <FeaturesTwo/>
                <FeaturesThree/>
                <StatsOne/>
                <StatsTwo/>
                <PricingOne/>
                <BlogPostOne/>
            </Card>
            <PreFooterOne/>
            <FooterOne/>
        </div>
    );
};


export default HomePage;