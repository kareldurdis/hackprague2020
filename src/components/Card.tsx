import classNames from 'classnames';
import React, { memo, PropsWithChildren } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    padding: 10,
    border: '1px solid #000',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

interface Props {
  className?: string;
}

const Card = ({ className, children }: PropsWithChildren<Props>) => {
  const classes = useStyles();
  return <div className={classNames(className, classes.card)}>{children}</div>;
};

export default memo(Card);
