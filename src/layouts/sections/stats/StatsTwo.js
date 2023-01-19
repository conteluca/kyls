import React from 'react';
import MKBox from "../../../components/MKBox";
import {Container, Grid} from "@mui/material";
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";

const StatsTwo = () => {
    return (
        <MKBox component="section" py={3}>
            <Container>
                <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
                    <Grid item xs={12} md={4}>
                        <DefaultCounterCard
                            color="primary"
                            count={323}
                            title="Projects"
                            description="Of “high-performing” level are led by a certified project manager"
                        />
                    </Grid>
                    <Grid item xs={12} md={4} display="flex">
                        <DefaultCounterCard
                            color="primary"
                            count={500}
                            suffix="+"
                            title="Hours"
                            description="That meets quality standards required by our users"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <DefaultCounterCard
                            color="primary"
                            count={24}
                            suffix="/7"
                            title="Support"
                            description="Actively engage team members that finishes on time"
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
};

export default StatsTwo;