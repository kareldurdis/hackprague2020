import classNames from 'classnames';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    color: '#1A5BEF',
    fontSize: 46,
    fontWeight: 700,
    marginTop: 14,
    marginBottom: 0,
    lineHeight: '48px',
  },
});

interface Props extends HTMLAttributes<HTMLElement> {}

const Title = ({ className, ...rest }: Props) => {
  const classes = useStyles();
  return <h1 className={classNames(classes.button, className)} {...rest} />;
};

export default Title;
