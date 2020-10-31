import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import Content from "../../../components/Content";
import { Routes } from "../../../components/Router/routes";
import EmergencyFundLogo from '../../../assets/emergency-fund.jpg';
import NextLink from "../../../components/NextLink";

const useStyles = createUseStyles({
    image: {
        width: 388,
        height: 388,
    },
    p: {
        margin: [5, 0, 10, 0],
    }
});

const EmergencyIntro = () => {
    const classes = useStyles();

    return (
        <Content>
            <img src={EmergencyFundLogo} alt="Emergency fund" className={classes.image} />
            <h1>Emergency fund</h1>

            <p className={classes.p}>Car broke down? TV? Phone?</p>
            <p className={classes.p}>Emergency fund will help you cover unexpected expenses.</p>
            <nav>
                {/* TODO: Route to Emergency fund setup */}
                <NextLink to={Routes.Emergency_intro} />
            </nav>
        </Content>
    );
};

export default memo(EmergencyIntro);
