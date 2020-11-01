import { formatEuro } from '../utils';
import * as React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import Plusator from './Plusator';

const useStyles = createUseStyles({
  card: {
    border: '1px solid #E6E6E6',
    borderRadius: 34,
    padding: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    color: '#818181',
    fontWeight: 'bold',
    fontSize: 18,
  },
  green: {
    color: 'rgb(88, 201, 74)',
    fontSize: 24,
  },
});

interface Props {
  name: string;
  amount: number;
  monthly?: number;
  positive?: boolean;
  className?: string;
  plusator?: boolean;
}

export const SpendCard = ({ className, name, amount, positive, plusator }: Props) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.card, className)}>
      <div className={classes.name}>{name}</div>
      <div className={classNames(classes.price, { [classes.green]: positive })}>
        {plusator ? <Plusator amount={amount} /> : formatEuro(amount)}
      </div>
    </div>
  );
};
