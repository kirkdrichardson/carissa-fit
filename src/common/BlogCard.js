import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { slideDownAnimation } from './StyledComponentGlobal';
import style from './../global/Style';
// import variable from './../global/Variable';
// import color from './../global/Color';

const BlogCard = ({
  id, imgSrc, title, previewText, onClick
}) => (
  <CardContainer id={id} onClick={onClick}>
    <picture>
      <img src={imgSrc} alt='' />
    </picture>
    <h3>{ title }</h3>
    <p>{ previewText }</p>
    <button>Read more</button>
  </CardContainer>
);

const CardContainer = styled.div`
  ${style.cssSnippets.flexColumn}
  max-width: 300px;
  border: 2px solid green;
  padding: 20px;
`;

BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default BlogCard;
