import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import style from './../global/Style';

const IconLinkBar = ({ children }) =>
  (
    <IconLinkBarContainer>
      { children }
    </IconLinkBarContainer>
  );

const IconLinkBarContainer = styled.div`

`;

IconLinkBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default IconLinkBar;
