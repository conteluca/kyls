import React from 'react';
import {kNavItems} from "../../../../components/constants";
import DefaultNavbar from "../../../../examples/Navbars/DefaultNavbar";

const NavbarBlur = () => {
    return (
        <DefaultNavbar
            routes={kNavItems}
            action={{
                type: "external",
                route: "https://www.creative-tim.com/product/material-kit-pro-react",
                label: "sign in",
                color: "info",
            }}
            relative
            center
        />    );
};

export default NavbarBlur;