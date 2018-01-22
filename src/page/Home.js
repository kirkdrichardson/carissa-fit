import React from 'react';
// import styled from 'styled-components';
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
        <SignUpBar isTablet={routingStore.isTablet} />
        <p>{ `window height is ${routingStore.windowHeight}`}</p>
        <p>{ `window width is ${routingStore.windowWidth}`}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </MainContentWrapper>
    </PageContainer>
  ));

export default Home;
