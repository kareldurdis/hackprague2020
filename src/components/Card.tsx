import classNames from 'classnames';
import React, { HTMLAttributes, memo, PropsWithChildren } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    padding: 10,
    border: '1px solid #E6E6E6',
    borderRadius: 26,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    boxSizing: 'border-box',
    width: '100%',
    position: 'relative',
  },
});

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Card = ({ className, children, ...rest }: PropsWithChildren<Props>) => {
  const classes = useStyles();
  return (
    <div className={classNames(className, classes.card)} {...rest}>
      {children}
    </div>
  );
};

export default memo(Card);
