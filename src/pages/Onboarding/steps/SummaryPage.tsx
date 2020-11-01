import * as React from 'react';
import Content from '../../../components/Content';
import { Link } from 'react-router-dom';
import { Routes } from '../../../components/Router/routes';
import { createUseStyles } from 'react-jss';
import { formatEuro, sumIncomes, useStorage } from '../../../utils';
import { PaymentType, useDreamsContext } from '../../../context/dreams';
import { Transaction } from '../../../__mocks__/transactions';
import { useEffect } from 'react';
import BackLink from '../../../components/BackLink';
import NextLink from '../../../components/NextLink';

const useStyles = createUseStyles({
  content: {
    backgroundColor: 'rgba(187, 207, 253, 0.2)',
  },
  mainHeading: {
    color: '#1A5BEF',
    fontSize: 46,
  },
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
  button: {
    marginTop: 20,
  },
});

interface Props {
  name: string;
  amount: number;
  monthly?: number;
}

const SpendCard = ({ name, amount }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>{formatEuro(amount)}</div>
    </div>
  );
};

const SummaryPage = () => {
  const classes = useStyles();
  const income = sumIncomes();
  const { payments: savedPayments, setIsOnboarded } = useDreamsContext();
  const monthly = savedPayments.filter((payment) => payment.type === PaymentType.monthly);
  const annual = savedPayments.filter((payment) => payment.type === PaymentType.annual);
  const [, setBudget] = useStorage('budget', 0);
  const payments = {
    monthly: monthly.reduce((accumulator, current) => {
      return accumulator + Math.abs(current.cost);
    }, 0),
    dreams: 200,
    annual: annual.reduce((accumulator, current) => {
      return accumulator + Math.abs(current.cost);
    }, 0),
  };
  const budget = income - payments.monthly - payments.dreams - payments.annual / 12;

  useEffect(() => {
    setBudget(budget);
  }, [budget, setBudget]);

  return (
    <Content className={classes.content}>
      <BackLink to={Routes.Emergency_intro} />
      <h1 className={classes.mainHeading}>Monthly budget</h1>
      <SpendCard name={'Analyzed income'} amount={income} />
      <SpendCard name={'Monthly payments'} amount={payments.monthly} />
      <SpendCard name={'Dreams payments'} amount={payments.dreams} />
      <SpendCard name={'Annual payments'} amount={payments.annual} />
      <SpendCard name={'Spending budget'} amount={budget} />
      <NextLink
        className={classes.button}
        to={Routes.Dashboard}
        onClick={() => setIsOnboarded(true)}
      />
    </Content>
  );
};

export default SummaryPage;
