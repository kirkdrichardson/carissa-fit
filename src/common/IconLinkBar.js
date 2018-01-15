import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from './../global/Style';
import color from './../global/Color';

const IconLinkBar = ({ children }) =>
  (
    <IconLinkBarContainer>
      <IconGroup>
        { children.map(icon =>
        (
          <Link key={icon.type} target='_blank' href={icon.link}>
            <Icon className={`zmdi ${icon.zmdiClass}`} />
          </Link>
      ))}
      </IconGroup>
    </IconLinkBarContainer>
  );

const IconLinkBarContainer = styled.div`
`;

const IconGroup = styled.div`
  ${style.cssSnippets.flexRow}
  flex-wrap: nowrap;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${color.linkColor};
  :visited {
    color: ${color.linkColor};
  }
`;

const Icon = styled.i`
  margin-left: 22px;
`;

IconLinkBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default IconLinkBar;
