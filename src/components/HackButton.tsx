import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { useRef } from 'react';
import { Routes } from './Router/routes';
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles({
  button: {
    width: 50,
    height: 50,
    borderRadius: '100%',
    border: 0,
    background: 'black',
    color: 'white',
    cursor: 'pointer',
  },
  wrapper: {
    position: 'fixed',
    right: 15,
    bottom: 15,
  },
  ul: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    bottom: 60,
    right: 0,
    width: 150,
    '& li': {
      listStyle: 'none',
    },
    '& button': {
      width: '100%',
      padding: 4,
      cursor: 'pointer',
    },
  },
});

const HackButton = () => {
  const classes = useStyles();
  const [showOptions, setOptionsVisibiliy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  React.useEffect(() => {
    if (!ref?.current || !showOptions) {
      return () => {};
    }

    const buttonElement = ref.current;

    const onDocumentClick = (event: Event) => {
      if (!buttonElement.contains(event.target as Node)) {
        setOptionsVisibiliy(false);
      }
    };

    document.addEventListener('click', onDocumentClick);

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [ref, showOptions, setOptionsVisibiliy]);

  return (
    <div className={classes.wrapper} ref={ref}>
      {showOptions ? (
        <ul className={classes.ul}>
          <li>
            <button onClick={() => history.push(Routes.Dashboard)}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => history.push(Routes.WeeklyReview)}>Weekly review</button>
          </li>
          <li>
            <button onClick={() => history.push(Routes.MonthlyReview)}>Monthly review</button>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.replace(Routes.Homepage);
              }}
            >
              Start over
            </button>
          </li>
        </ul>
      ) : null}

      <button className={classes.button} onClick={() => setOptionsVisibiliy((state) => !state)}>
        H
      </button>
    </div>
  );
};

export default HackButton;
