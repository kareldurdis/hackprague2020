import * as React from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../components/Content';
import DreamCard from '../../components/DreamCard';
import { monthlyTransactions } from '../../__mocks__/transactions';
import { formatEuro, useStorage } from '../../utils';
import { ProgressBar } from '../../components/ProgressBar';
import HackButton from '../../components/HackButton';
import * as faker from 'faker';
import Title from '../../components/Title';
import classNames from 'classnames';
import { useDreamsContext } from '../../context/dreams';
import Tooltip from '../../components/Tooltip';

const useStyles = createUseStyles({
  table: {
    width: '100%',
  },
  h1: {
    padding: 0,
    margin: 0,
    fontSize: 32,
  },
  sides: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  spendTitle: {
    color: 'rgb(26, 91, 239, 0.7)',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 0,
    fontWeight: 500,
  },
  amounts: {
    fontSize: 32,
    color: 'rgb(26, 91, 239, 0.7)',
    fontWeight: 700,
    marginBottom: 15,
  },
  spent: {
    color: 'rgb(26, 91, 239)',
  },
  dream: {
    marginBottom: 10,
  },
  thumb: {
    position: 'absolute',
    fontSize: 38,
    top: 5,
    left: 18,
  },
  tooltip: {
    background: '#89EFBE',
    padding: [18, 18, 18, 70],
    borderRadius: 20,
    position: 'relative',
    marginTop: 20,
    color: '#202020',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: ({ progress = 0 }) => `${progress}%`,
      marginLeft: -7,
      top: -9,
      width: 0,
      height: 0,
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderBottom: '9px solid #89EFBE',
    },
  },
  content: {
    padding: 0,
  },
  overlay: {
    background: 'rgb(187, 207, 253, 0.2)',
    padding: [70, 20, 30, 20],
  },
  bottomContent: {
    padding: 20,
  },
  h3: {
    padding: 0,
    margin: 0,
    fontSize: 24,
    fontWeight: 700,
    color: 'rgb(44, 44, 44)',
    paddingBottom: 18,
  },
  ul: {
    margin: 0,
    padding: 0,
    overflow: 'auto',
    maxHeight: '30vh',
    listStyle: 'none',
    '& li': {
      listStyle: 'none',
      '&:last-child label': {
        borderBottom: 'none',
      },
    },
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(28, 28, 28, 0.5)',
  },
  description: {
    color: 'rgba(28, 28, 28, 1)',
    fontSize: 16,
    fontWeight: 900,
  },
  amount: {
    color: 'rgba(28, 28, 28, 0.55)',
    fontSize: 16,
    fontWeight: 600,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  left: {
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    padding: [10, 0],
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
});

const DasboradPage = () => {
  const spent = 170;
  const [budget] = useStorage('budget', 0);
  const weeklyBudget = budget / 4;
  const available = weeklyBudget - spent;
  const { dreams } = useDreamsContext();

  const formatDate = (date: Date) => `${date.getMonth()}/${date.getDate()}`;

  const classes = useStyles({ progress: (spent / weeklyBudget) * 100 });

  return (
    <Content className={classes.content}>
      <div className={classes.overlay}>
        <h1 className={classes.h1}>
          Hi, {faker.random.arrayElement(['Filip', 'Karel', 'Michal', 'Lukáš'])}
        </h1>
        <Title>Weekly spending</Title>

        <div className={classNames(classes.sides, classes.spendTitle)}>
          <div>Spendings</div>
          <div>Budget</div>
        </div>

        <div className={classNames(classes.sides, classes.amounts)}>
          <div className={classes.spent}>{formatEuro(spent)}</div>
          <div>{formatEuro(weeklyBudget)}</div>
        </div>

        <ProgressBar current={spent} total={weeklyBudget} />

        <Tooltip left={(spent / weeklyBudget) * 100}>
          <>
            <div className={classes.thumb}>👍</div>
            {available >= 0 ? (
              <>
                You're doing good! <strong>You can spend {formatEuro(available)} this week.</strong>
              </>
            ) : (
              <>
                You've already spent your weekly budget. You should cut your expenses until end of
                the week.
              </>
            )}
          </>
        </Tooltip>
      </div>

      <div className={classes.bottomContent}>
        <h3 className={classes.h3}>My Dreams</h3>

        {dreams.map((dream) => (
          <DreamCard
            dream={dream}
            className={classes.dream}
            progress={faker.random.number({ min: 10, max: 90 })}
            key={dream.id}
          />
        ))}

        <br />
        <h3>Payment History</h3>
        <ul className={classes.ul}>
          {monthlyTransactions.slice(0, 3).map((transaction) => {
            return (
              <>
                <li key={transaction.id}>
                  <div className={classes.label}>
                    <div className={classes.labelContainer}>
                      <div className={classes.left}>
                        <div className={classes.date}>{formatDate(transaction.date)}</div>
                        <div className={classes.description}>{transaction.description}</div>
                      </div>
                      <div className={classes.amount}>{formatEuro(transaction.amount)}</div>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      <HackButton />
    </Content>
  );
};

export default DasboradPage;
