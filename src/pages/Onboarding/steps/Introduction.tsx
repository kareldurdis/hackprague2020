import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import Content from "../../../components/Content";
import { Routes } from "../../../components/Router/routes";
import BackLink from "../../../components/BackLink";
import NextLink from "../../../components/NextLink";

const useStyles = createUseStyles({
    p: {
        margin: [5, 0, 10, 0],
    }
});

const Introduction = () => {
    const classes = useStyles();

    return (
        <Content>
            <BackLink to={Routes.Onboarding_01} />
            <p className={classes.p}>In order to reach your goals, we need to get to know your finances a little better</p>
            <NextLink to={Routes.Montly_Payments} />
        </Content>
    );
};

export default memo(Introduction);
