import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import Content from '../../../components/Content';
import DreamCard from '../../../components/DreamCard';
import { Routes } from '../../../components/Router/routes';
import NextLink from '../../../components/NextLink';
import { useDreamsContext } from '../../../context/dreams';

const useStyles = createUseStyles({
  dreamCard: {
    margin: [10, 0],
  },
});

const OnboardingStep01 = () => {
  const classes = useStyles();
  const { dreams } = useDreamsContext();

  return (
    <Content>
      <h1>Dreams</h1>

      <ul>
        {dreams.map((dream) => (
          <li key={dream.id}>
            <Link to={Routes.Onboarding_01}>
              <DreamCard className={classes.dreamCard} dream={dream} />
            </Link>
          </li>
        ))}

        <li>
          <Link to={Routes.NewDream}>
            <DreamCard className={classes.dreamCard} />
          </Link>
        </li>
      </ul>
      <nav>
        <NextLink to={Routes.Introduction} />
      </nav>
    </Content>
  );
};

export default memo(OnboardingStep01);
