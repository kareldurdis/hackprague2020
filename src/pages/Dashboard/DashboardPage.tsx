import * as React from "react";
import { createUseStyles } from "react-jss";
import { Checkbox } from "reakit";
import Content from "../../components/Content";
import DreamCard from "../../components/DreamCard";
import transactions from "../../__mocks__/transactions";
import { formatEuro } from "../../utils";
import { ProgressBar } from "../../components/ProgressBar";
import HackButton from "../../components/HackButton";

const useStyles = createUseStyles({
  table: {
    width: "100%",
  },
});

const DasboradPage = () => {
  const classes = useStyles();
  const budget = 322;
  const spent = 170;
  const dayOfWeek = 4;
  const available = budget - spent;

  return (
    <Content>
      <h1>Dashboard</h1>
      <h2>Weekly spending</h2>
      <table className={classes.table}>
        <tr>
          <td>Weekly budget</td>
          <td>{formatEuro(budget)}</td>
        </tr>
        <tr>
          <td>Your spendings</td>
          <td>{formatEuro(spent)}</td>
        </tr>
      </table>
      <br />

      <ProgressBar
        current={spent}
        total={budget}
        goal={(budget / 7) * dayOfWeek}
      />

      <br />

      {available >= 0 ? (
        <>You're doing good! You can spend {formatEuro(available)} this week.</>
      ) : (
        <>Vedeš si blbě</>
      )}

      <button>Show Summary</button>

      <br />
      <h3>Dreams</h3>

      <DreamCard dream={{ cost: 1000, name: "Lambo", id: "fake" }} />

      <h3>Payment History</h3>
      <ul>
        {transactions.slice(0, 3).map((transaction) => {
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
