import React, { memo } from "react";
import PositiveWeeklyReview from "./Positive";
import NegativeWeeklyReview from "./Negative";

const WeeklyReview = () => {
  // TODO: Load budget data
  const budget = 350;
  const spent = 150;
  const week = 2;
  const goal = budget * (week / 4);
  const difference = goal - spent;

  if (difference > 0) {
    return (
      <PositiveWeeklyReview
        spent={spent}
        budget={budget}
        week={week}
        goal={goal}
        difference={difference}
      />
    );
  }

  return (
    <NegativeWeeklyReview
      spent={spent}
      budget={budget}
      week={week}
      goal={goal}
      difference={difference}
    />
  );
};

export default memo(WeeklyReview);
