import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { Checkbox } from 'reakit';
import Content from '../../components/Content';
import DreamCard from '../../components/DreamCard';
import { monthlyTransactions } from '../../__mocks__/transactions';
import { formatEuro, useStorage } from '../../utils';
import { ProgressBar } from '../../components/ProgressBar';
import HackButton from '../../components/HackButton';

const useStyles = createUseStyles({
  table: {
    width: '100%',
  },
});

const DasboradPage = () => {
  const classes = useStyles();
  const spent = 170;
  const dayOfWeek = 4;
  const [budget] = useStorage('budget', 0);
  const weeklyBudget = budget / 4;
  const available = weeklyBudget - spent;

  return (
    <Content>
      <h1>Dashboard</h1>
      <h2>Weekly spending</h2>
      <table className={classes.table}>
        <tbody>
          <tr>
            <td>Weekly budget</td>
            <td>{formatEuro(weeklyBudget / 4)}</td>
          </tr>
          <tr>
            <td>Your spendings</td>
            <td>{formatEuro(spent)}</td>
          </tr>
        </tbody>
      </table>
      <br />

      <ProgressBar current={spent} total={weeklyBudget} goal={(weeklyBudget / 7) * dayOfWeek} />

      <br />

      {available >= 0 ? (
        <>You're doing good! You can spend {formatEuro(available)} this week.</>
      ) : (
        <>
          You've already spent your weekly budget. You should cut your expenses until end of the
          week.
        </>
      )}

      <button>Show Summary</button>

      <br />
      <h3>Dreams</h3>

      <DreamCard dream={{ cost: 1000, name: 'Lambo', id: 'fake' }} />

      <h3>Payment History</h3>
      <ul>
        {monthlyTransactions.slice(0, 3).map((transaction) => {
          return <li key={transaction.id}>{transaction.description}</li>;
        })}
      </ul>

      <h3>Recommended</h3>
      <label>
        <Checkbox checked /> Emergency fund
      </label>
      <label>
        <Checkbox /> Life insurance
      </label>

      <HackButton
        onNewTransaction={() => {}}
        onWeeklyReview={() => {}}
        onMonthlyReview={() => {}}
      />
    </Content>
  );
};

export default DasboradPage;
