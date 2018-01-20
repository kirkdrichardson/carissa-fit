import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { PageContainer, MainContentWrapper } from './../common/StyledComponentGlobal';
import PhotoBar from './../common/PhotoBar';
import SignUpBar from './../common/SignUpBar';

import routingStore from './../store/RoutingStore';

// import style from './../global/Style';
// import color from './../global/Color';

const Home = observer(() =>
  (
    <PageContainer>
      <PhotoBar />
      <MainContentWrapper>
        <SignUpBar />
        <p>{ `window height is ${routingStore.windowHeight}`}</p>
        <p>{ `window width is ${routingStore.windowWidth}`}</p>
      </MainContentWrapper>
    </PageContainer>
  ));

export default Home;
