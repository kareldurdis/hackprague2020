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
    transform: 'rotate(180deg)',
  },
  smallImage: {
    width: 30,
    height: 30,
    transform: 'rotate(180deg)',
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

// TODO: Texts
const NegativeWeeklyReview = ({ spent, budget, week, goal, difference }: WeeklyReviewProps) => {
  const classes = useStyles();

  const nextWeekBudget = week === 4 ? budget : goal + difference;

  return (
    <Content>
      <h1>Weekly review</h1>

      <img className={classes.largeImage} src={ThumbsUpImg} alt="Bad job!" />
      <p>That didn't turn out as expected.</p>
      <p>
        Well, that happens sometimes. We'll reduce your budget for next week so you can pick up the
        pace to reach your dreams!
      </p>

      <ProgressBar current={spent} total={budget} goal={goal} />

      <div className={classes.table}>
        <div className={classes.tableRow}>
          <div>
            <img className={classes.smallImage} src={ThumbsUpImg} alt="Bad job!" />
            You overspent
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

export default memo(NegativeWeeklyReview);
