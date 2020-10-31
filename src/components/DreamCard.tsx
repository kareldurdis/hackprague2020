import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { Dream } from '../context/dreams';
import Card from './Card';

const useStyles = createUseStyles({
  card: {
    width: 300,
    height: 100,
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
    <Card className={classNames(className, classes.card)}>
      {dream ? (
        <>
          <div>{dream.name}</div>
          <div>{dream.cost}&nbsp;€</div>
        </>
      ) : (
        <div>+</div>
      )}
    </Card>
  );
};

export default memo(DreamCard);
