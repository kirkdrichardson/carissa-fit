import styled from 'styled-components';

import style from './../global/Style';

/* eslint-disable import/prefer-default-export */

export const MainContentMaxWidth = 1200;
export const MainContentMinWidth = 360;

export const PageContainer = styled.div`
  width: 100%;
  overflow: scroll;
  box-sizing: border-box;
  ${style.cssSnippets.flexColumn};
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

export const MainContentWrapper = styled.div`
  max-width: ${MainContentMaxWidth}px;
  min-width: ${MainContentMinWidth}px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  ${style.cssSnippets.flexColumn}
  flex-wrap: nowrap;
`;
