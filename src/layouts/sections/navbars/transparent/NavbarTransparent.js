import React from 'react';
import {kNavItems} from "../../../../components/constants";
import DefaultNavbar from "../../../../examples/Navbars/DefaultNavbar";

const NavbarTransparent = () => {
    return (
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
            center
        />
    );
};

export default NavbarTransparent;