import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../components/Content';
import { WeeklyReviewProps } from './typings';
import ThumbsUpImg from '../../assets/thumbs-up.png';
import { Link } from 'react-router-dom';
import { Routes } from '../../components/Router/routes';
import ProgressBar from '../../components/ProgressBar';

const useStyles = createUseStyles({
  largeImage: {
    width: 100,
    height: 100,
  },
  smallImage: {
    width: 30,
    height: 30,
  },
  table: {
    width: '100%',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: [10, 20],
  },
});

const PositiveWeeklyReview = ({ spent, budget, week, goal, difference }: WeeklyReviewProps) => {
  const classes = useStyles();

  const nextWeekBudget = week === 4 ? budget : goal + difference;

  return (
    <Content>
      <img className={classes.largeImage} src={ThumbsUpImg} alt="Good job!" />

      <h1>Weekly review</h1>

      <p>
        You did good job this week! You've met your goal. Unspent money have been added to weekly
        budgets for the rest of the month.
      </p>

      <ProgressBar current={spent} total={budget} goal={goal} />

      <div className={classes.table}>
        <div className={classes.tableRow}>
          <div>
            <img className={classes.smallImage} src={ThumbsUpImg} alt="Good job!" />
            You saved
          </div>
          <div>{difference} €</div>
        </div>
        <div className={classes.tableRow}>
          <div>Next week budget</div>
          <div>{nextWeekBudget} €</div>
        </div>
      </div>

      <Link to={Routes.Dashboard}>Close</Link>
    </Content>
  );
};

export default memo(PositiveWeeklyReview);
