import React from 'react';
import styled from 'styled-components';

import { PageContainer, MainContentWrapper } from './../common/StyledComponentGlobal';
import PhotoBar from './../common/PhotoBar';
import SignUpBar from './../common/SignUpBar';


// import style from './../global/Style';
// import color from './../global/Color';

const Home = () =>
  (
    <PageContainer>
      <PhotoBar />
      <MainContentWrapper>
        <SignUpBar />
        home
      </MainContentWrapper>
    </PageContainer>
  );

export default Home;
