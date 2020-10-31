import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { Link, useParams } from 'react-router-dom';
import Content from '../../components/Content';
import ProgressBar from '../../components/ProgressBar';
import { Routes } from '../../components/Router/routes';
import { useDreamsContext } from '../../context/dreams';
import DreamError from './error';

const useStyles = createUseStyles({
  image: {
    width: 313,
    height: 215,
  },
});

const DreamDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { dreams } = useDreamsContext();
  const classes = useStyles();

  const dream = dreams.find((_dream) => _dream.id === id);
  if (!dream) {
    return <DreamError />;
  }

  // TODO: Get saved money
  const saved = dream.cost / 2;

  return (
    <Content>
      {dream.image && <img src={dream.image} alt="" className={classes.image} />}

      <ProgressBar current={saved} total={dream.cost} />

      <h1>{dream.name}</h1>
      <div>{dream.cost}&nbsp;€</div>
      {/* TODO: Progress */}
    </Content>
  );
};

export default memo(DreamDetail);
