import classNames from 'classnames';
import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    display: 'block',
    width: '100%',
    background: '#1A5BEF',
    color: 'white',
    borderRadius: 20,
    border: 'none',
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: 'inherit',
    padding: [16, 20],
  },
});

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, ...rest }: Props) => {
  const classes = useStyles();
  return <button className={classNames(classes.button, className)} {...rest} />;
};

export default Button;
