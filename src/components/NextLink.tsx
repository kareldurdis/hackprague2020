import classNames from "classnames";
import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
    backLink: {
        padding: 10,
        border: "1px solid #000",
        borderRadius: 5,
        display: "flex",
        alignSelf: 'flex-end',
        textDecoration: 'none',
    },
});

interface Props {
    className?: string;
    to: string;
}

const NextLink = ({ className, to }: Props) => {
    const classes = useStyles();
    return (
        <Link to={to} className={classNames(className, classes.backLink)}>
            Next &gt;
        </Link>
    );
};

export default memo(NextLink);
