import React from 'react';
import styled from 'styled-components';

import TabBar from './TabBar';
import IconLinkBar from './IconLinkBar';

import style from './../global/Style';


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
      <TabBarContainer>
        <TabBar>
          {
            [
              { type: 'HOME', title: 'HOME' },
              { type: 'BLOG', title: 'BLOG' },
              { type: 'SERVICES', title: 'SERVICES' },
              { type: 'TESTIMONIALS', title: 'TESTIMONIALS' },
              { type: 'CONTACT', title: 'CONTACT' }
            ]
          }
        </TabBar>
        </TabBarContainer>
      </NavSection>
      <SocialLinkSection>
        <IconLinkBar>
          {
          [
            { type: 'INSTAGRAM', zmdiClass: 'zmdi-instagram', link: 'https://www.instagram.com/trainforhealth.carissa/' },
            { type: 'FACEBOOK', zmdiClass: 'zmdi-facebook', link: 'https://www.facebook.com/carissa.richardson.750' },
            { type: 'MAIL', zmdiClass: 'zmdi-email', link: '#' }
          ]
        }
        </IconLinkBar>
      </SocialLinkSection>
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
  ${style.cssSnippets.flexRow}
  flex: 1;
`;

const Logo = styled.picture`
  width: 170px;
  height: 46px;
`;

const NavSection = styled.div`
border: 1px dashed red;
  ${style.cssSnippets.flexRow}
  flex: 3;
`;

const TabBarContainer = styled.div`
  max-width: 620px;
  min-width: 548px;
  width: 100%;
`;

const SocialLinkSection = styled.div`
border: 1px dashed red;
  flex: 1;
`;

export default Header;
