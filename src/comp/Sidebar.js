import React, { Component } from 'react';
import withSizes from 'react-sizes';

import styled, { keyframes } from 'styled-components';

import { media, sizes } from './../global/styleUtils.js';
import { FlexColumn } from './../asset/styledComponents.js';

import strings from './../global/Strings.js';
import style from './../global/Style.js';
import color from './../global/Color.js';

import navigationStore from './../store/NavigationStore.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIconDescription: false
    }
  }
  toggleIconDescription = () => {
    this.setState({ showIconDescription: !this.state.showIconDescription });
  }
  render() {
    const     s = strings.en.sidebar,
              c = color.rubiks,
              { children, isTablet } = this.props,
              { showIconDescription } = this.state;
    return (
        <SidebarContainer
          onMouseOver={ this.toggleIconDescription }
          onMouseOut={ this.toggleIconDescription }>
            { [
                { id: 'home', icon: 'home', color: c.red, text: s.home },
                { id: 'discover', icon: 'hearing', color: c.blue, text: s.podcast, func: navigationStore.setObservablesToDefault },
                { id: 'blog', icon: 'book', color: c.orange, text: s.blog },
                { id: 'forum', icon: 'forum', color: c.yellow, text: s.forum },
                { id: 'about', icon: 'info_outline', color: c.red, text: s.about },
                { id: 'contact', icon: 'email', color: c.green, text: s.contact }
              ].map(e =>
                <NavLink key={e.id} id={e.id} onClick={e.func}>
                  <FlexColumn margin={isTablet ? null : '20px 0 0 0'}>
                      <Icon
                        color={ navigationStore.activeTab === e.id ? e.color : showIconDescription ? e.color : color.iconColor }
                        className='material-icons'>
                          { e.icon }
                      </Icon>
                      {!isTablet &&
                          <IconDescription color={showIconDescription ? color.primaryTextNegative : 'transparent' }>
                            { e.text }
                          </IconDescription>
                      }
                  </FlexColumn>
                </NavLink>
              )}
        </SidebarContainer>
    );
  }
}


const SidebarContainer = styled.nav`
  position: fixed;
  top: 100px;
  bottom: 0;
  width: 80px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  background-color: ${color.sidebarBackground};
  font-family: ${style.font.accent};
  ${media.tabletSmall`
      flex-flow: row wrap;
      justify-content: space-around;
      width: 100%;
      height: 50px;
      top: 60px;
    `}
    ${media.phone`
        top: 40px;
        height: 26px;
        background-color: ${color.headerBackground};
    `}
`;

const NavLink = styled.div`
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 40px;
  color: ${props => props.color };
  ${media.tabletSmall`
      font-size: 28px;
  `}
  ${media.phone`
      font-size: 14px;
  `}
`;

const slideIn = keyframes`
	from {
		margin-right: 160px;
    margin-top: 50px;
	}

  20% {
    margin-right: 0px;
    margin-left: 24px;
    margin-top: 8px;
  }

	to { margin: 0px; }
`;


const IconDescription = styled.p`
  margin: 0;
  font-size: 16px;
  padding: 8px;
  ${SidebarContainer}:hover & {
    animation: ${slideIn} 1s linear;
  }
  color: ${props => props.color};
  ${media.tabletSmall`
      font-size: 0px;
  `}
`;

const mapSizesToProps = ({ width }) => ({
  isTablet: width < sizes.tablet,
  isphone: width < sizes.phone
});

export default withSizes(mapSizesToProps)(Sidebar);
