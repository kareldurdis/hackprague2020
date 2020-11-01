import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { Checkbox as ReakitCheckbox, CheckboxStateReturn } from 'reakit';

const useStyles = createUseStyles({
  container: {
    display: 'block',
    position: 'relative',
    marginBottom: 12,
    cursor: 'pointer',
    fontSize: 22,
    userSelect: 'none',
  },
  checkmark: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 25,
    width: 25,
    backgroundColor: '#fff',
    border: '1px solid #D4D4D4',
    borderRadius: 6,
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',
      left: 9,
      top: 5,
      width: 5,
      height: 10,
      border: 'solid #1A5BEF',
      borderWidth: '0 3px 3px 0',
      transform: 'rotate(45deg)',
    },
    '.checked &:after': {
      display: 'block',
    },
  },
  checkbox: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
    margin: 0,
  },
});

interface CheckboxProps {
  className?: string;
  checkbox: CheckboxStateReturn;
  value?: string | number;
  checked: boolean;
}

const Checkbox = ({ className, checkbox, value, checked }: CheckboxProps) => {
  const classes = useStyles();
  return (
    <div className={classNames(className, classes.container, { checked })}>
      <ReakitCheckbox {...checkbox} value={value} className={classes.checkbox} />
      <span className={classes.checkmark}></span>
    </div>
  );
};

export default memo(Checkbox);
