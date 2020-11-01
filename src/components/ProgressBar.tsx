import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  slider: {
    width: '100%',
    background: '#D1DEFC',
    position: 'relative',
    height: 16,
    borderRadius: 6,
  },
  inner: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    borderRadius: 6,
  },
  goal: {
    height: 9,
    top: -2,
    width: 6,
    marginLeft: -3,
    background: 'brown',
    zIndex: 2,
    position: 'relative',
  },
});

interface Props {
  current: number;
  total: number;
  goal?: number;
}

export const ProgressBar = ({ current, total, goal }: Props) => {
  const classes = useStyles();

  const progress = (current / total) * 100;
  const goalProgress = goal !== undefined ? (goal / total) * 100 : undefined;

  const isOk = goalProgress === undefined || progress <= goalProgress;

  return (
    <div className={classes.slider}>
      <div
        className={classes.inner}
        style={{ width: `${progress}%`, background: isOk ? '#1A5BEF' : '#1A5BEF' }}
      />
      {goal !== undefined ? (
        <div className={classes.goal} style={{ left: `${goalProgress}%` }} />
      ) : null}{' '}
    </div>
  );
};

export default ProgressBar;
