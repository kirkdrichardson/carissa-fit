import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import style from './../global/Style';
import color from './../global/Color';

const Tab = ({ children, isActive }) =>
  (
    <TabContainer>
      { children }
      <TabUnderline isActive={isActive} />
    </TabContainer>
  );

const TabContainer = styled.div`
  position: relative;
  padding 6px 0;
`;

const TabUnderline = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 36px;
  margin: 0 auto;
  border: 2px solid transparent;
  border-bottom-color: ${props => (props.isActive ? color.tabUnderline : 'transparent')};
`;

Tab.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

Tab.defaultProps = {
  isActive: false
};

export default Tab;
