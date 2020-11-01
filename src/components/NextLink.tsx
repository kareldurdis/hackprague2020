import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Arrow from './Arrow';

const useStyles = createUseStyles({
  nextLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  className?: string;
  to: string;
  onClick?: () => void;
}

const NextLink = ({ className, to, onClick }: Props) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Button
      onClick={() => {
        history.push(to);
        if (onClick) {
          onClick();
        }
      }}
      className={classNames(className, classes.nextLink)}
    >
      <Arrow color="#fff" direction="right" />
    </Button>
  );
};

export default memo(NextLink);
