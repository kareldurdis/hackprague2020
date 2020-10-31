import * as React from 'react';
import Content from '../../../components/Content';
import { Link } from 'react-router-dom';
import { Routes } from '../../../components/Router/routes';
import { createUseStyles } from 'react-jss';
import { formatEuro, sumIncomes } from '../../../utils';
import { useDreamsContext } from '../../../context/dreams';

const useStyles = createUseStyles({
  card: {
    border: '1px solid black',
    padding: 20,
    width: '100%',
    maxWidth: 200,
    marginBottom: 20,
  },
  price: {
    textAlign: 'right',
    marginTop: 20,
  },
});

interface Props {
  name: string;
  amount: number;
  monthly?: number;
}

const SpendCard = ({ name, amount, monthly }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      {name}
      <br />
      <div className={classes.price}>
        {formatEuro(amount)} {monthly !== undefined ? `${formatEuro(monthly)} / month` : ''}
      </div>
    </div>
  );
};

const SummaryPage = () => {
  const income = sumIncomes();
  const { setIsOnboarded } = useDreamsContext();
  const payments = {
    monthly: 50,
    dreams: 200,
    annual: 120,
  };
  const budget = income - payments.monthly - payments.dreams - payments.annual / 12;
  return (
    <Content>
      <h1>Summary</h1>
      <h2>Monthly budget</h2>
      <SpendCard name={'Analyzed income'} amount={income} />
      <SpendCard name={'Monthly payments'} amount={payments.monthly} />
      <SpendCard name={'Dreams payments'} amount={payments.dreams} />
      <SpendCard name={'Annual payments'} amount={payments.annual} monthly={payments.annual / 12} />
      Spending budget {formatEuro(budget)}
      <Link to={Routes.Dashboard} onClick={() => setIsOnboarded(true)}>
        Continue
      </Link>
    </Content>
  );
};

export default SummaryPage;
