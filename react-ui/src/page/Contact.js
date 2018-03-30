import React from 'react';
// import styled from 'styled-components';

import { PageContainer, MainContentWrapper } from './../common/StyledComponentGlobal';
import PhotoBar from './../common/PhotoBar';
import SignUpBar from './../common/SignUpBar';

import routingStore from './../store/RoutingStore';

// import style from './../global/Style';
// import color from './../global/Color';

const Contact = () =>
  (
    <PageContainer>
      <PhotoBar />
      <MainContentWrapper>
        <SignUpBar isTablet={routingStore.isTablet} isMobileLarge={routingStore.isMobileLarge} />
        contact
      </MainContentWrapper>
    </PageContainer>
  );

export default Contact;
