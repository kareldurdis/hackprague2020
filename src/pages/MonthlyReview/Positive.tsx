import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../components/Content';
import { MonthlyReviewProps } from './typings';
import ThumbsUpImg from '../../assets/thumbs-up.png';
import { Link } from 'react-router-dom';
import { Routes } from '../../components/Router/routes';
import ProgressBar from '../../components/ProgressBar';
import Card from '../../components/Card';
import classNames from 'classnames';
import { useDreamsContext } from '../../context/dreams';
import Title from '../../components/Title';
import DreamCard from '../../components/DreamCard';
import { SpendCard } from '../../components/SpendCard';
import Tooltip from '../../components/Tooltip';
import Button from '../../components/Button';
import Plusator from '../../components/Plusator';
import * as faker from 'faker';

const useStyles = createUseStyles({
  thumbsUpImage: {
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
    '& > *': {
      margin: [10, 20],
    },
  },
  button: {
    padding: 0,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  dreamImage: {
    width: 200,
    height: 100,
  },
  columnCard: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    background: 'rgba(187, 207, 253, 0.2)',
  },
  title: {
    paddingBottom: 33,
  },
  tooltip: {
    margin: 0,
  },
  card: {
    background: 'white',
    marginBottom: 15,
  },
});

const PositiveMonthlyReview = ({ saved }: MonthlyReviewProps) => {
  const classes = useStyles();
  const { dreams } = useDreamsContext();

  const dreamSaved = 300;

  return (
    <Content className={classes.content}>
      <Title className={classes.title}>Monthly review</Title>

      <SpendCard name={'You Saved'} amount={saved} positive />
      <Tooltip left={50} className={classes.tooltip}>
        <strong>Excellent!</strong> You've managed to stay within your spending budget. Now is the
        time to transfer saved money to your goals.
      </Tooltip>

      <h3>Money Transfer</h3>

      {dreams.map((dream) => (
        <DreamCard
          dream={dream}
          progress={faker.random.number({ min: 25, max: 80 })}
          key={dream.id}
          className={classes.card}
          plusator={saved}
        />
      ))}

      <SpendCard name={'Next Week Budget'} amount={saved} plusator />

      <SpendCard name={'Annual Payments'} amount={10} />

      {/* TODO: Handle transfer */}
      <Button>Transfer</Button>
    </Content>
  );
};

export default memo(PositiveMonthlyReview);
