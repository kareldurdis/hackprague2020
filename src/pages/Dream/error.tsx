import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Content from '../../components/Content';
import { Routes } from '../../components/Router/routes';

const DreamError = () => {
  return (
    <Content>
      <p>We are terribly sorry, but we couldn't find this dream.</p>
      <p>
        Maybe you'd like to <Link to={Routes.NewDream}>create a new one?</Link>
      </p>
    </Content>
  );
};

export default memo(DreamError);
