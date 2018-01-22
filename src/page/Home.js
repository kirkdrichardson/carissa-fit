import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { PageContainer, MainContentWrapper } from './../common/StyledComponentGlobal';
import PhotoBar from './../common/PhotoBar';
import SignUpBar from './../common/SignUpBar';

import routingStore from './../store/RoutingStore';

import style from './../global/Style';
import Color from './../global/Color';
import s from './../global/Strings';

// <p>{ `window height is ${routingStore.windowHeight}`}</p>
// <p>{ `window width is ${routingStore.windowWidth}`}</p>

const Home = observer(() =>
  (
    <PageContainer>
      <PhotoBar />
      <MainContentWrapper>
        <SignUpBar isTablet={routingStore.isTablet} isMobileLarge={routingStore.isMobileLarge} />
        <TextContainer>
          <h1>{ s.home.mainContentHeader }</h1>
          <p>{ s.home.bodyOne }</p>
          <h4>{ s.home.secondaryHeader }</h4>
          <p>{ s.home.bodyTwo }</p>
          <h2>{ s.home.footerHeader }</h2>
        </TextContainer>


      </MainContentWrapper>
    </PageContainer>
  ));

const TextContainer = styled.div`
  margin: 20px;
  ${style.cssSnippets.flexColumn}
  align-items: flex-start;
  color: ${Color.component.textPrimary};

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 24px;
  }

  p {
    line-height: 26px;
  }
`;

export default Home;
