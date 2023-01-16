import React from 'react';
import {Navbar} from "../components";
import Hero from "../components/Hero";



const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Content/>
        </div>
    );
};
const Content = () => {
    return (
        <div>
            {[...new Array(112)]
                .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
        </div>
    );
};

export default LandingPage;