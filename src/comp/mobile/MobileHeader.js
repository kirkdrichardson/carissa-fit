import React from 'react';

import styled, { keyframes } from 'styled-components';

import { media } from './../global/styleUtils.js';

import strings from './../global/Strings.js';
import style from './../global/Style.js';
import color from './../global/Color.js';

const MobileHeader = ({ children }) => {
  const s = strings.en;
  return (
    <HeaderContainer>
      <Title>{ s.humansInward }</Title>

    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${color.headerBackground};
  color: ${color.primaryTextNegative};
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  flex: 0 auto;
  z-index: 99;
  ${media.tabletSmall`
      height: 60px;
  `}
  ${media.phone`
      height: 40px;
  `}
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${style.font.header};
  ${media.tabletSmall`
      font-size: 34px;
  `}
  ${media.phone`
      font-size: 26px;
  `}
`;

export default MobileHeader;
