import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../../components/Content';
import DreamCard from '../../../components/DreamCard';
import { Routes } from '../../../components/Router/routes';
import NextLink from '../../../components/NextLink';
import { useDreamsContext } from '../../../context/dreams';
import Title from '../../../components/Title';
import BackLink from '../../../components/BackLink';
import dreams from '../../../__mocks__/dreams';
import { useStorage } from '../../../utils';

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
  const { setDreams } = useDreamsContext();
  const [selected, setSelected] = useStorage<string[]>('selected-dreams', []);

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
                    setSelected(selected.filter((item) => item !== dream.id));
                  } else {
                    setSelected([...selected, dream.id]);
                  }
                }}
              />
            </li>
          );
        })}
      </ul>
      <nav>
        <NextLink
          onClick={() => setDreams(dreams.filter((dream) => selected.includes(dream.id)))}
          to={Routes.Introduction}
        />
      </nav>
    </Content>
  );
};

export default memo(DreamList);
