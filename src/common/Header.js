import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TabBar from './TabBar';
import IconLinkBar from './IconLinkBar';

import style from './../global/Style';
import color from './../global/Color';


// TODO - add conditional logic to return a web header or mobile header depending on breakpoint prop
const Header = observer(({ routingStore }) =>
  (
    <HeaderWeb>
      <LogoContainer>
        <Logo>
          <img src='https://picsum.photos/170/46' alt='logo' />
        </Logo>
      </LogoContainer>
      <NavSection>
        <TabBarContainer>
          <TabBar routingStore={routingStore}>
            {
            [
              { key: 'HOME', title: 'HOME' },
              { key: 'BLOG', title: 'BLOG' },
              { key: 'SERVICES', title: 'SERVICES' },
              { key: 'TESTIMONIALS', title: 'TESTIMONIALS' },
              { key: 'CONTACT', title: 'CONTACT' }
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
  ));

Header.propTypes = {
  routingStore: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const HeaderWeb = styled.header`
  background-color: ${color.headerBackground};
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
