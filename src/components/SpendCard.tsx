import { formatEuro } from '../utils';
import * as React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  card: {
    border: '1px solid #E6E6E6',
    borderRadius: 34,
    padding: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    color: '#818181',
    fontWeight: 'bold',
  },
  green: {
    color: 'rgb(88, 201, 74)',
  },
});

interface Props {
  name: string;
  amount: number;
  monthly?: number;
  positive?: boolean;
  className?: string;
}

export const SpendCard = ({ className, name, amount, positive }: Props) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.card, className)}>
      <div className={classes.name}>{name}</div>
      <div className={classNames(classes.price, { [classes.green]: positive })}>
        {formatEuro(amount)}
      </div>
    </div>
  );
};
