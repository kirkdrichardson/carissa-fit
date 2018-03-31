import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// import style from './../global/Style';
import Color from './../global/Color';

const Tab = ({ children, isActive, returnCurrentPageComponent, pageKey, href }) => // eslint-disable-line object-curly-newline, max-len
  (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <TabContainer
        id={pageKey}
        onClick={e => returnCurrentPageComponent(e.currentTarget.id)}
      >
        <Text isActive={isActive}>{ children }</Text>
        <TabUnderline isActive={isActive} />
      </TabContainer>
    </Link>
  );

const TabContainer = styled.div`
  text-decoration: none;
  position: relative;
  padding 6px 0;
  cursor: pointer;
`;

const TabUnderline = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 26px;
  margin: 0 auto;
  border: 2px solid transparent;
  border-bottom-color: ${props => (props.isActive ? Color.component.tabUnderline : 'transparent')};
`;

const Text = styled.p`
  margin: 0;
  color: ${props => (props.isActive ? Color.component.activeTab : Color.component.navLink)};
`;

Tab.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  returnCurrentPageComponent: PropTypes.func.isRequired,
  pageKey: PropTypes.string.isRequired,
  href: PropTypes.string
};

Tab.defaultProps = {
  isActive: false
};

export default Tab;
