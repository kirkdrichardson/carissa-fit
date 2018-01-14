import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from './../global/Style';

const IconLinkBar = ({ children }) =>
  (
    <IconLinkBarContainer>
      <IconGroup>
        { children.map(icon =>
        (
          <Link target='_blank' href={icon.link}>
            <Icon className={`zmdi ${icon.zmdiClass}`} />
          </Link>
      ))}
      </IconGroup>
    </IconLinkBarContainer>
  );

const IconLinkBarContainer = styled.div`
  ${style.cssSnippets.flexRow}
`;

const IconGroup = styled.div`

`;

const Link = styled.a`
  text-decoration: none;
`;

const Icon = styled.i`
  margin-left: 22px;
`;

IconLinkBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default IconLinkBar;
