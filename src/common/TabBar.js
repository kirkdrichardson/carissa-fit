import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tab from './Tab';

// import style from './../global/Style';

const TabBar = ({ children }) => (
  <TabContainer>
    { children.map(tab =>
      <Tab isActive={true} key={tab.type}>{ tab.title }</Tab>) }
  </TabContainer>
);

TabBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

const TabContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
export default TabBar;
