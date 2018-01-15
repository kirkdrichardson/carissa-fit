import styled from 'styled-components';

import style from './../global/Style';

/* eslint-disable import/prefer-default-export */

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ${style.cssSnippets.flexColumn};
  justify-content: flex-start;
`;

export const MainContentWrapper = styled.div`
border 1px dashed coral;
  max-width: 1200px;
  min-width: 360px;
  box-sizing: border-box;
  width: 100%;
  ${style.cssSnippets.flexColumn};
`;
