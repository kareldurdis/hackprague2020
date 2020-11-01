import React, { memo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import Content from '../../../components/Content';
import DreamCard from '../../../components/DreamCard';
import { Routes } from '../../../components/Router/routes';
import NextLink from '../../../components/NextLink';
import { useDreamsContext } from '../../../context/dreams';
import Title from '../../../components/Title';
import BackLink from '../../../components/BackLink';

const useStyles = createUseStyles({
  dreamCard: {
    margin: [10, 0],
    cursor: 'pointer',
  },
  ul: {
    padding: [0, 0, 25, 0],
    margin: 0,
    '& li': {
      listStyle: 'none',
    },
  },
});

const DreamList = () => {
  const classes = useStyles();
  const { dreams, setDreams } = useDreamsContext();
  const [selected, setSelected] = useState([dreams[1].id]);

  return (
    <Content>
      <BackLink to={Routes.Homepage} />
      <Title>Dreams</Title>

      <ul className={classes.ul}>
        {dreams.map((dream) => {
          const isSelected = selected.includes(dream.id);
          return (
            <li key={dream.id}>
              <DreamCard
                className={classes.dreamCard}
                dream={dream}
                checked={isSelected}
                onClick={() => {
                  if (isSelected) {
                    setSelected((state) => state.filter((item) => item !== dream.id));
                  } else {
                    setSelected((state) => [...state, dream.id]);
                  }
                }}
              />
            </li>
          );
        })}
      </ul>
      <nav>
        <NextLink to={Routes.Introduction} />
      </nav>
    </Content>
  );
};

export default memo(DreamList);
