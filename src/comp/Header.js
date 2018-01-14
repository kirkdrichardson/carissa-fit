import React from 'react';
import withSizes from 'react-sizes';

import styled, { keyframes } from 'styled-components';

import { media, sizes} from './../global/styleUtils.js';

import Flame from './../asset/Flame.js';

import strings from './../global/Strings.js';
import style from './../global/Style.js';
import color from './../global/Color.js';

const Header = ({ children, isTablet }) => {
  const s = strings.en;
  return (
    <HeaderContainer>
      <Flame shrinkBy={isTablet ? 3 : 2} fadeDuration={1} />
      <Title>
          <FadeFirst>{ s.humans }</FadeFirst>
          <FadeSecond>{ s.inward }</FadeSecond>
        </Title>
      <Flame shrinkBy={isTablet ? 3 : 2} fadeDuration={3} />

    </HeaderContainer>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; }
  30% { opacity: 0; }
  to { opacity: 1; }
`;

const fadeInSlowly = keyframes`
  from { opacity: 0; }
  15% { opacity: 0 }
  30% { opacity: 0.1 }
  40% { opacity: 1 }
  to { opacity: 1; }
`;


const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${color.primaryBackground};
  color: ${color.primaryTextNegative};
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
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
  letter-spacing: 2px;
  word-spacing: 6px;
  ${media.tabletSmall`
      font-size: 34px;
  `}
  ${media.phone`
      font-size: 26px;
  `}
`;

const FadeFirst = styled.span`
  animation: ${fadeIn} 2.5s;
  display: inline-block;
  margin-right: 14px;
`;

const FadeSecond = styled.span`
  animation: ${fadeInSlowly} 6s;
`;

const mapSizesToProps = ({ width }) => ({
  isTablet: width < sizes.tablet,
  isphone: width < sizes.phone
});

export default withSizes(mapSizesToProps)(Header);
