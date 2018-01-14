import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import style from './../global/Style';

const Tab = ({ children }) =>
  (
    <TabContainer>
      { children }
    </TabContainer>
  );

const TabContainer = styled.div`

`;

Tab.propTypes = {
  children: PropTypes.string.isRequired
};

export default Tab;
