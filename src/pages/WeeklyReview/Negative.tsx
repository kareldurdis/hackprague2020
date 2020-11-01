import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../components/Content';
import { WeeklyReviewProps } from './typings';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar';
import classNames from 'classnames';
import CloseButton from '../../components/CloseButton';
import { SpendCard } from '../../components/SpendCard';
import { formatEuro } from '../../utils';
import Tooltip from '../../components/Tooltip';

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
  noMargin: {
    margin: 0,
  },
  heading: {
    fontSize: 46,
    color: '#1A5BEF',
  },
  content: {
    backgroundColor: 'rgba(187, 207, 253, 0.2)',
  },
  budgetDesc: {
    fontSize: 16,
    color: 'rgba(26, 91, 239, 0.7)',
  },
  spending: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#1A5BEF',
  },
  budget: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'rgba(26, 91, 239, 0.7)',
  },
  closeButton: {
    marginTop: 30,
  },
  card: {
    marginBottom: 10,
  },
});

const NegativeWeeklyReview = ({ spent, budget, week, goal, difference }: WeeklyReviewProps) => {
  const classes = useStyles();
  const history = useHistory();

  const nextWeekBudget = week === 4 ? budget : goal + difference;

  return (
    <Content className={classes.content}>
      <h1 className={classes.heading}>Weekly review</h1>

      <div className={classes.table}>
        <div className={classNames(classes.tableRow, classes.noMargin)}>
          <div>
            <div className={classes.budgetDesc}>Spendings</div>
            <div className={classes.spending}>{formatEuro(spent)}</div>
          </div>
          <div>
            <div className={classes.budgetDesc}>Budget</div>
            <div className={classes.budget}>{formatEuro(goal)}</div>
          </div>
        </div>
      </div>
      <ProgressBar current={Math.min(spent, goal)} total={goal} />

      <br />

      <SpendCard className={classes.card} name={'You overspent'} amount={difference} positive />
      <SpendCard className={classes.card} name={'Next week budget'} amount={nextWeekBudget} />

      <Tooltip left={50} className={classes.noMargin} positive={false}>
        <strong>That didn't turn out as expected.</strong> Well, that happens sometimes. We'll
        reduce your budget for next week so you can pick up the pace to reach your dreams!
      </Tooltip>

      <CloseButton className={classes.closeButton} onClick={() => history.goBack()} />
    </Content>
  );
};

export default memo(NegativeWeeklyReview);
