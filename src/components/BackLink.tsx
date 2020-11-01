import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const useStyles = createUseStyles({
  backLink: {
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#1C1C1C',
    fontWeight: 600,
    fontSize: 24,
  },
  arrow: {
    width: 17,
    height: 17,
    marginRight: 10,
  },
});

interface Props {
  className?: string;
  to: string;
}

const BackLink = ({ className, to }: Props) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classNames(className, classes.backLink)}>
      <Arrow className={classes.arrow} /> Back
    </Link>
  );
};

export default memo(BackLink);
