import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Content from '../../components/Content';
import { Routes } from '../../components/Router/routes';

const Onboarding = () => {
  return (
    <Content>
      <h1>Dream Assistant</h1>

      <Link to={Routes.DreamList}>Start dreaming</Link>
    </Content>
  );
};

export default memo(Onboarding);
