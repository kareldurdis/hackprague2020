import { formatEuro } from '../utils';
import * as React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  thumb: {
    position: 'absolute',
    fontSize: 38,
    top: 5,
    left: 18,
  },
  tooltip: {
    background: '#EFD089',
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
      borderBottom: '9px solid #EFD089',
    },
    '&.positive': {
      background: '#89EFBE',
      '&::after': {
        borderBottom: '9px solid #89EFBE',
      },
    },
  },
});

const Tooltip = ({
  left,
  children,
  className,
  positive = true,
}: {
  className?: string;
  left: number;
  children: React.ReactNode;
  positive?: boolean;
}) => {
  const classes = useStyles({ progress: left });
  return (
    <div className={classNames(classes.tooltip, className, { positive })}>
      <div className={classes.thumb}>{positive ? '👍' : '😞'}</div>
      {children}
    </div>
  );
};

export default Tooltip;
