import React from 'react';
import styled from 'styled-components';

import Header from './common/Header';
import Home from './page/Home';

import style from './global/Style';
import color from './global/Color';

const App = () =>
  (
    <MainContainer>
      <Header />
      <Home />
    </MainContainer>
  );

const MainContainer = styled.main`
border: 1px dashed coral;

  background-color: ${color.mainContainerBackground};
  height: calc(100% - ${style.headerHeight});
  width: 100%;
  margin-top: ${style.headerHeight};
  box-sizing: border-box;
  overflow: scroll;
`;

export default App;
