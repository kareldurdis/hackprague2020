import classNames from 'classnames';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Button from './Button';

const useStyles = createUseStyles({
  closeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});

interface Props {
  className?: string;
  onClick?: () => void;
}

const CloseButton = ({ className, onClick }: Props) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={classNames(className, classes.closeButton)}
    >
      Close
    </Button>
  );
};

export default memo(CloseButton);
