import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Header from './common/Header';

import style from './global/Style';
import color from './global/Color';

const App = observer(({ routingStore }) =>
  (
    <ReactContainer id='react-container'>
      <Header routingStore={routingStore} />
      <MainContainer>
        {
          routingStore.returnCurrentPageComponent(routingStore.currentPageKey)
        }
      </MainContainer>
    </ReactContainer>
  ));

App.propTypes = {
  routingStore: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const ReactContainer = styled.div`
  height: 100%;
  width: 100%;
  `;

const MainContainer = styled.main`
  background-color: ${color.mainContainerBackground};
  height: calc(100% - ${style.headerHeight});
  width: 100%;
  margin-top: ${style.headerHeight};
  box-sizing: border-box;
  overflow: scroll;
`;

export default App;
