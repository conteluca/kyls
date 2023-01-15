import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>this is about</h1>
            <Button onClick={() => navigate('/')}>Back</Button>
        </div>
    );
};

export default AboutPage;