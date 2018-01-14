import React from 'react';
import styled from 'styled-components';

import Header from './common/Header';

import style from './global/Style';

const App = () =>
  (
    <MainContainer>
      <Header />
    </MainContainer>
  );

const MainContainer = styled.main`
border: 1px dashed coral;

  background-color: #222;
  height: 100%;
  width: 100%;
  margin-top: ${style.headerHeight};
  box-sizing: border-box;
`;

export default App;
