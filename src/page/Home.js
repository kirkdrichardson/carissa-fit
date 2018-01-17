import React from 'react';
import styled from 'styled-components';

import { PageContainer, MainContentWrapper } from './../common/StyledComponentGlobal';
import PhotoBar from './../common/PhotoBar';

// import style from './../global/Style';
// import color from './../global/Color';

const Home = () =>
  (
    <PageContainer>
      <PhotoBar />
      <MainContentWrapper>
        home
      </MainContentWrapper>
    </PageContainer>
  );

export default Home;
