import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Header from './common/Header';

import style from './global/Style';
import color from './global/Color';

const App = observer(({ routingStore }) =>
  (
    <MainContainer>
      <Header routingStore={routingStore} />
      {
        routingStore.returnCurrentPageComponent(routingStore.currentPageKey)
      }
    </MainContainer>
  ));

App.propTypes = {
  routingStore: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const MainContainer = styled.main`
border: 1px dashed coral;

  background-color: ${color.mainContainerBackground};
  height: calc(100% - ${style.headerHeight});
  width: 100%;
  margin-top: ${style.headerHeight};
  box-sizing: border-box;
  overflow: scroll;
`;

export default App;
