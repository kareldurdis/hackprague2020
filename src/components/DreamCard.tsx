import classNames from 'classnames';
import React, { HTMLAttributes, memo } from 'react';
import { createUseStyles } from 'react-jss';
import { Dream } from '../context/dreams';
import Card from './Card';
import { formatEuro } from '../utils';
import CheckmarkChecked from '../assets/CheckmarkChecked.svg';
import CheckmarkUnchecked from '../assets/CheckmarkUnchecked.svg';
import Plusator from './Plusator';

const useStyles = createUseStyles({
  card: {
    padding: 15,
    color: '#818181',
    minHeight: 250,
  },
  sides: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 900,
    color: '#1C1C1C',
  },
  hr: {
    border: 'none',
    borderBottom: '1px solid #E6E6E6',
    padding: 0,
    margin: [9, 0],
    width: '100%',
  },
  wrap: {
    width: '100%',
  },
  img: {
    width: '100%',
    padding: [0, 50],
    boxSizing: 'border-box',
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 32,
    height: 32,
  },
  slider: {
    width: '100%',
    background: 'rgb(230, 230, 230)',
    height: 4,
    margin: [9, 0],
  },
  inner: {
    background: 'rgb(88, 201, 74)',
    height: '100%',
  },
  plusator: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
  dream: Dream;
  image?: any;
  checked?: boolean;
  progress?: number;
  plusator?: number;
}

const DreamCard = ({ checked, className, dream, progress, plusator, ...rest }: Props) => {
  const classes = useStyles();
  return (
    <Card className={classNames(className, classes.card)} {...rest}>
      <div className={classes.wrap}>
        {plusator ? <Plusator className={classes.plusator} amount={plusator} /> : null}
        {checked !== undefined ? (
          <img
            src={checked ? CheckmarkChecked : CheckmarkUnchecked}
            alt={''}
            className={classes.checkmark}
          />
        ) : null}
        {dream.image ? <img src={dream.image} alt={dream.name} className={classes.img} /> : null}
        <div className={classes.sides}>
          <div className={classes.name}>{dream.name}</div>
          <div>{formatEuro(dream.cost)}</div>
        </div>
        {progress !== undefined ? (
          <div className={classes.slider}>
            <div style={{ width: `${progress}%` }} className={classes.inner} />
          </div>
        ) : (
          <hr className={classes.hr} />
        )}
        <div className={classes.sides}>
          <div>Jan 19’</div>
          <div>Mar 21’</div>
        </div>
      </div>
    </Card>
  );
};

export default memo(DreamCard);
