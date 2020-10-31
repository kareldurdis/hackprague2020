import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Content from "../../../components/Content";
import { Routes } from "../../../components/Router/routes";

const useStyles = createUseStyles({
    p: {
        margin: [5, 0, 10, 0],
    }
});

const Introduction = () => {
    const classes = useStyles();

    return (
        <Content>
            <p className={classes.p}>In order to reach your goals, we need to get to know your finances a little better</p>
            <Link to={Routes.Montly_Payments}>Next -&gt;</Link>
        </Content>
    );
};

export default memo(Introduction);
