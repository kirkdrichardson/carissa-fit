import React from 'react';
import styled from 'styled-components';

import { PageContainer, MainContentWrapper } from './../common/StyledComponentGlobal';
import PhotoBar from './../common/PhotoBar';

// import style from './../global/Style';
// import color from './../global/Color';

const Blog = () =>
  (
    <PageContainer>
      <PhotoBar />
      <MainContentWrapper>
        blog
      </MainContentWrapper>
    </PageContainer>
  );

export default Blog;
