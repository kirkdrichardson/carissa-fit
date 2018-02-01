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

// https://hackernoon.com/improve-your-ux-by-dynamically-rendering-images-via-react-onload-393fd4d0d946

const PhotoBar = ({ photoArr }) => // eslint-disable-line object-curly-newline, max-len
  (
    <PhotoBarContainer>
      {
        photoArr.map(srcString => (
          <picture key={srcString}>
            <Image src={srcString} alt='action' />
          </picture>
         ))
      }
    </PhotoBarContainer>
  );

// const slideDown = keyframes`
//   from { top: -500px; }
//   to { top: 60px; }
//   `;

const PhotoBarContainer = styled.div`
  ${style.cssSnippets.flexRow}
    box-sizing: border-box;
  width: 100%;
  picture {
    margin-right: 4px;
    :nth-last-child(1) {
      margin-right: 0;
    }
  }
`;

// const importedImageWidth = 900;
// const aspectRatio = 6 / 5;
//
// const PhotoContainer = styled.picture`
// border: 1px dashed green;
//   position: relative;
//   display: flex;
//   flex: 1 1 auto;
//   width: ${importedImageWidth}px;
//   height: ${Math.round(importedImageWidth / aspectRatio)}px;
//   margin-right: 4px;
//   :nth-last-child(1) {
//     margin-right: 0;
//   }
//   overflow: hidden;
// `;

const Image = styled.img`

`;

PhotoBar.propTypes = {
  photoArr: PropTypes.arrayOf(PropTypes.string)
};

PhotoBar.defaultProps = {
  photoArr: variable.photoBarSrcArr
};

export default PhotoBar;
