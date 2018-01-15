import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Tab from './Tab';

// import style from './../global/Style';

const TabBar = observer(({ children, routingStore }) => (
  <TabContainer>
    { children.map(tab =>
      (
        <Tab
          pageKey={tab.key}
          returnCurrentPageComponent={routingStore.returnCurrentPageComponent}
          isActive={Boolean(tab.key === routingStore.currentPageKey)}
          key={tab.key}
        >
          { tab.title }
        </Tab>)) }
  </TabContainer>
));

TabBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  routingStore: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const TabContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
export default TabBar;
