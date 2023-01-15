import React from 'react';
import {styled} from "@mui/material";

const Backgroud = styled('div')({
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
});
const BackgroundImage = ({image, children}) => {
    return (
        <Backgroud style={{backgroundImage: ` url(${image})`}}>
            {children}
        </Backgroud>
    );
};

export default BackgroundImage;