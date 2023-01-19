import React from 'react';
import {kNavItems} from "../../../../components/constants";
import MKBox from "../../../../components/MKBox";
import DefaultNavbar from "../../../../examples/Navbars/DefaultNavbar";

const NavbarDark = () => {
    return (
        <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
            <DefaultNavbar
                routes={kNavItems}
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-pro-react",
                    label: "buy now",
                    color: "info",
                }}
                transparent
                relative
                light
                center
            />
        </MKBox>
    );
};

export default NavbarDark;