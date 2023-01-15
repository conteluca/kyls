import React from 'react';
import {useNavigate} from "react-router-dom";
import {Link, Typography} from "@mui/material";

const BrandComponent = ({color, title}) => {
    let navigate = useNavigate();
    return (<Link underline={"none"} component={'button'} onClick={() => navigate('/')}>
            <Typography
                variant="h6"
                noWrap
                // component="div"
                fontWeight={"bold"}
                color={color}
            >
                {title}
            </Typography>
        </Link>
    );
};


export default BrandComponent;