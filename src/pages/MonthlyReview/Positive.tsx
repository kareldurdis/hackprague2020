import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../components/Content';
import { MonthlyReviewProps } from './typings';
import ThumbsUpImg from '../../assets/thumbs-up.png';
import { Link } from 'react-router-dom';
import { Routes } from '../../components/Router/routes';
import ProgressBar from '../../components/ProgressBar';
import { Button } from 'reakit';
import Card from '../../components/Card';
import classNames from 'classnames';
import { useDreamsContext } from '../../context/dreams';
import DreamError from '../Dream/error';

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
});

const PositiveMonthlyReview = ({ saved }: MonthlyReviewProps) => {
  const classes = useStyles();
  const { dreams } = useDreamsContext();

  // TODO: How to select a dream to show?
  const dream = dreams[0];
  const dreamSaved = 300;

  return (
    <Content>
      <h1>Monthly review</h1>

      <p>
        Excellent! You've managed to stay within your spending budget. Now is the time to transfer
        saved money to your goals.
      </p>

      <div className={classes.table}>
        <div className={classes.tableRow}>
          <div>
            <img className={classes.thumbsUpImage} src={ThumbsUpImg} alt="Good job!" />
            You saved
          </div>
          <div>{saved} €</div>
        </div>

        <Button className={classNames(classes.tableRow, classes.button)}>
          <Card>
            <div className={classes.table}>
              <div className={classes.tableRow}>
                <div>
                  <img className={classes.thumbsUpImage} src={ThumbsUpImg} alt="Good job!" />
                  Next month budget
                </div>
                <div>add {saved} €</div>
              </div>
            </div>
          </Card>
        </Button>
      </div>

      {dream && (
        <Card className={classes.columnCard}>
          <div className={classes.table}>
            <div className={classes.tableRow}>
              <div>
                <img className={classes.thumbsUpImage} src={ThumbsUpImg} alt="Good job!" />
                Saved {dreamSaved}&nbsp;€
              </div>
              <Link to={`${Routes.DreamDetail}/${dream.id}`}>Options</Link>
            </div>
          </div>

          {dream.image && <img src={dream.image} className={classes.dreamImage} alt="" />}

          <div className={classes.table}>
            <div className={classes.tableRow}>
              <div>{dream.name}</div>
              <div>{dream.cost}&nbsp;€</div>
            </div>
          </div>

          <ProgressBar current={dreamSaved} total={dream.cost} />

          <Button className={classes.button}>
            <Card>Add {saved}&nbsp;€</Card>
          </Button>
        </Card>
      )}

      <Button className={classes.button}>
        <Card className={classes.columnCard}>
          <div>Annual payments</div>
          <div className={classes.table}>
            <div className={classes.tableRow}>
              <div>
                <img className={classes.thumbsUpImage} src={ThumbsUpImg} alt="Good job!" />
                Next month budget
              </div>
              <div>add {saved} €</div>
            </div>
          </div>
        </Card>
      </Button>

      {/* TODO: Handle transfer */}
      <Button>Transfer</Button>
    </Content>
  );
};

export default memo(PositiveMonthlyReview);
