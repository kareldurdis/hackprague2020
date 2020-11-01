import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: 28,
    height: 28,
  },
  rotate: {
    transform: 'rotate(180deg)',
  },
});

interface ArrowProps {
  className?: string;
  color?: string;
  direction?: 'left' | 'right';
}

const Arrow = ({ className, color = '#1C1C1C', direction = 'left' }: ArrowProps) => {
  const classes = useStyles();

  return (
    <svg
      viewBox="0 0 28 28"
      version="1.1"
      className={classNames(classes.container, className, {
        [classes.rotate]: direction === 'left',
      })}
    >
      <title>Icons/Arrow</title>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icons/Arrow" fill={color}>
          <path
            // eslint-disable-next-line max-len
            d="M15.2165942,0.689192345 L26.978643,12.3361307 C27.9066208,13.255071 27.9066208,14.7449342 26.978643,15.6638745 L15.2165942,27.3108128 C14.2885958,28.2297325 12.7840131,28.2297325 11.855994,27.3108335 C10.9280163,26.3918931 10.9280163,24.9020299 11.8560147,23.9831103 L19.767,16.15 L2.5,16.1507602 C1.11928813,16.1507602 1.2273771e-13,15.031472 1.22568622e-13,13.6507602 C1.22399533e-13,12.2700483 1.11928813,11.1507602 2.5,11.1507602 L19.059,11.15 L11.8560147,4.0168949 C10.9280163,3.09797522 10.9280163,1.60811203 11.855994,0.689171709 C12.7840131,-0.229727342 14.2885958,-0.229727342 15.2165942,0.689192345 Z"
            id="Arrow"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default memo(Arrow);
