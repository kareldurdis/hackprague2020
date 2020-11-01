import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const useStyles = createUseStyles({
  nextLink: {},
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
      &gt;
    </Button>
  );
};

export default memo(NextLink);
