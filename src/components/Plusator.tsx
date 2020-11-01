import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Plus from '../assets/green.svg';
import { formatEuro } from '../utils';

const useStyles = createUseStyles({
  plus: {
    width: 32,
    height: 32,
    borderRadius: '100%',
    right: 18,
    top: 15,
    cursor: 'pointer',
    fontSize: 0,
    paddingLeft: 10,
  },
  wrapper: {
    background: 'rgb(88, 201, 74)',
    borderRadius: 24,
    padding: [8, 10],
    color: 'white',
    fontSize: 21,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    width: 90,
  },
});

interface Props {
  amount: number;
  className?: string;
}

const Plusator = ({ amount, className }: Props) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.wrapper, className)}>
      {formatEuro(amount)}
      <div className={classes.plus}>
        <img src={Plus} alt={''} />
      </div>
    </div>
  );
};

export default memo(Plusator);
