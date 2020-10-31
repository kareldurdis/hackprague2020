import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Content from "../../../components/Content";
import DreamCard from "../../../components/DreamCard";
import { Routes } from "../../../components/Router/routes";
import dreams from "../../../__mocks__/dreams";

const useStyles = createUseStyles({
  dreamCard: {
    margin: [10, 0],
  },
});

const OnboardingStep01 = () => {
  const classes = useStyles();

  return (
    <Content>
      <h1>Dreams</h1>

      <ul>
        {dreams.map((dream) => (
          <li key={dream.id}>
            {/* TODO: Link to step 2 */}
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
    </Content>
  );
};

export default memo(OnboardingStep01);