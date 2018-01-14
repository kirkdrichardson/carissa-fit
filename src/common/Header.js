import React from 'react';
import styled from 'styled-components';

import TabBar from './TabBar';

import style from './../global/Style';

const TABDATA = [
  { type: 'HOME', title: 'HOME' },
  { type: 'BLOG', title: 'BLOG' },
  { type: 'SERVICES', title: 'SERVICES' },
  { type: 'TESTIMONIALS', title: 'TESTIMONIALS' },
  { type: 'CONTACT', title: 'CONTACT' }
];

// TODO - add conditional logic to return a web header or mobile header depending on breakpoint prop
const Header = () =>
  (
    <HeaderWeb>
      <LogoContainer>
        <Logo>
          <img src='https://picsum.photos/170/46' alt='logo' />
        </Logo>
      </LogoContainer>
      <NavSection>
        <TabBar>
          { TABDATA }
        </TabBar>
      </NavSection>
    </HeaderWeb>
  );

const HeaderWeb = styled.header`
  background-color: green;
  height: ${style.headerHeight};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

const LogoContainer = styled.div`
border: 1px dashed red;
  flex: 1;
`;

const Logo = styled.picture`
  width: 170px;
  height: 46px;
`;

const NavSection = styled.div`
border: 1px dashed red;
  flex: 2;
`;

export default Header;
