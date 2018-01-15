import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from './../global/Style';
import variable from './../global/Variable';
// import color from './../global/Color';

/**
takes arr of strings as photoArr prop
if photoArr is undefined, ./../global/Variable.photoBarSrcArr is used
*/

const PhotoBar = ({ photoArr }) => // eslint-disable-line object-curly-newline, max-len
  (
    <PhotoBarContainer>
      {
        photoArr.map(srcString => (
          <PhotoContainer key={srcString}>
            <Image src={srcString} alt='action' />
          </PhotoContainer>
         ))
      }
    </PhotoBarContainer>
  );

const PhotoBarContainer = styled.div`
border: 1px dashed coral;
  ${style.cssSnippets.flexRow}
  box-sizing: border-box;
  width: 100%;
`;

const importedImageWidth = 900;
const aspectRatio = 6 / 5;

const PhotoContainer = styled.picture`
border: 1px dashed green;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width: ${importedImageWidth}px;
  height: ${Math.round(importedImageWidth / aspectRatio)}px;
  margin-right: 4px;
  :nth-last-child(1) {
    margin-right: 0;
  }
  overflow: hidden;
`;


const Image = styled.img`
  flex: 1 1 auto;
`;

PhotoBar.propTypes = {
  photoArr: PropTypes.arrayOf(PropTypes.string)
};

PhotoBar.defaultProps = {
  photoArr: variable.photoBarSrcArr
};

export default PhotoBar;
