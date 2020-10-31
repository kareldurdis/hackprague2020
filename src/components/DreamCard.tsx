import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { Dream } from '../context/dreams';

const useStyles = createUseStyles({
  card: {
    padding: 10,
    border: '1px solid #000',
    borderRadius: 5,
    width: 300,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

interface Props {
  className?: string;
  dream?: Dream;
  image?: any;
}

const DreamCard = ({ className, dream }: Props) => {
  const classes = useStyles();
  return (
    <div className={classNames(className, classes.card)}>
      {dream ? (
        <>
          <div>{dream.name}</div>
          <div>{dream.cost}&nbsp;€</div>
        </>
      ) : (
        <div>+</div>
      )}
    </div>
  );
};

export default memo(DreamCard);
