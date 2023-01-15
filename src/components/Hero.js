import React from "react";
import BackgroundImage from "./BackgroundImage";
import {styled} from "@mui/material";

const Title = styled('h1')({
    margin: 0,
    fontSize: "6em",
    color: "white",
});
const Subtitle = styled('p')({
    fontSize: "1em",
    color: "white",
});
function Hero() {
    return (
      <BackgroundImage image={'/fitness.jpg'}>
         <div>
             <Title>Keep Your Life Simple</Title>
             <Subtitle>This is an example of a page with a background image that adjusts to the screen
                 size.</Subtitle>
         </div>
      </BackgroundImage>
    );
}
export default Hero;