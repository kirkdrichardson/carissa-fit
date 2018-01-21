import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TabBar from './TabBar';
import IconLinkBar from './IconLinkBar';
import Dropdown from './Dropdown';

import style from './../global/Style';
import color from './../global/Color';
import variable from './../global/Variable';

const NavigationData = [
  { key: 'HOME', title: 'HOME' },
  { key: 'BLOG', title: 'BLOG' },
  { key: 'SERVICES', title: 'SERVICES' },
  { key: 'TESTIMONIALS', title: 'TESTIMONIALS' },
  { key: 'CONTACT', title: 'CONTACT' }
];


// TODO - add conditional logic to return a web header or mobile header depending on breakpoint prop
const Header = observer(({ routingStore }) => {
  let Navigation = null;
  let SocialLinks = null;

  if (routingStore.isTablet) {
    Navigation = (
      <DropdownContainer>
        <Dropdown>{ NavigationData }</Dropdown>
      </DropdownContainer>
    );
  } else {
    Navigation = (
      <NavSection>
        <TabBarContainer>
          <TabBar routingStore={routingStore}>
            { NavigationData }
          </TabBar>
        </TabBarContainer>
      </NavSection>
    );

    SocialLinks = (
      <SocialLinkSection>
        <IconLinkBar>
          {
          [
            { type: 'INSTAGRAM', zmdiClass: 'zmdi-instagram', link: 'https://www.instagram.com/trainforhealth.carissa/' },
            { type: 'FACEBOOK', zmdiClass: 'zmdi-facebook', link: 'https://www.facebook.com/carissa.richardson.750' },
            { type: 'MAIL', zmdiClass: 'zmdi-email', link: 'mailto:bulkemail42@gmail.com' }
          ]
        }
        </IconLinkBar>
      </SocialLinkSection>
    );
  }

  return (
    <HeaderWeb isTablet={routingStore.isTablet}>
      <LogoContainer isTablet={routingStore.isTablet}>
        <Logo>
          <img src='https://picsum.photos/170/46?image=292' alt='logo' />
        </Logo>
      </LogoContainer>
      { Navigation }
      { SocialLinks }
    </HeaderWeb>
  );
});


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
  justify-content: ${props => (props.isTablet ? 'space-between' : 'space-around')};
  align-items: center;
`;

const LogoContainer = styled.div`
  ${style.cssSnippets.flexRow}
  justify-content: ${props => (props.isTablet ? 'flex-start' : 'center')};
  margin-left: ${props => (props.isTablet ? 20 : 0)}px;
  flex: 1;
`;

const Logo = styled.picture`
  width: 170px;
  height: 46px;
`;

const NavSection = styled.div`
  ${style.cssSnippets.flexRow}
  flex: 3;
  font-family: 'Comfortaa', cursive;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 2px;
`;

const TabBarContainer = styled.div`
  max-width: 500px;
  min-width: 500px;
  width: 100%;
`;

const SocialLinkSection = styled.div`
  flex: 1;
`;

const DropdownContainer = styled.div`
  font-size: 36px;
  margin-right: 20px;
  ul {
    top: 50px;
    right: 0;
    font-size: 26px;
    background: gray;
    border-radius: 6px;

    li {
      box-sizing: border-box;
      width: 100%;
      padding: 12px 26px;
      :hover {
        background-color: red;
      }
    }
  }
`;

export default Header;
