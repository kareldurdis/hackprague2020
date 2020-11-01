import * as React from 'react';
import { useEffect } from 'react';
import Content from '../../../components/Content';
import { Routes } from '../../../components/Router/routes';
import { createUseStyles } from 'react-jss';
import { sumIncomes, useStorage } from '../../../utils';
import { PaymentType, useDreamsContext } from '../../../context/dreams';
import BackLink from '../../../components/BackLink';
import NextLink from '../../../components/NextLink';
import { SpendCard } from '../../../components/SpendCard';

const useStyles = createUseStyles({
  content: {
    backgroundColor: 'rgba(187, 207, 253, 0.2)',
  },
  mainHeading: {
    color: '#1A5BEF',
    fontSize: 46,
  },
  button: {
    marginTop: 20,
  },
});

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
