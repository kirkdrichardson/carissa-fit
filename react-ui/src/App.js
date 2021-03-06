import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Header from './common/Header';

import style from './global/Style';
import Color from './global/Color';

const App = observer(class App extends React.Component {
  /* eslint-disable no-undef */
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // https://github.com/eslint/eslint/issues/4683
  updateWindowDimensions = () => {
    this.props.routingStore.handleStateChange('windowHeight', window.innerHeight);
    this.props.routingStore.handleStateChange('windowWidth', window.innerWidth);
  }

  render() {
    const { routingStore, children } = this.props; // eslint-disable-line react/prop-types
    return (
      <ReactContainer id="react-container">
        <Header routingStore={routingStore} />
        <MainContainer>
          { children }
        </MainContainer>
      </ReactContainer>
    );
  }
});

App.propTypes = {
  routingStore: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const ReactContainer = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  `;

const MainContainer = styled.main`
  background-color: ${Color.component.mainContainerBackground};
  height: calc(100% - ${style.headerHeight});
  width: 100%;
  margin-top: ${style.headerHeight};
  box-sizing: border-box;
  overflow: scroll;
`;

export default App;
