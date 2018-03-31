import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import { slideDownAnimation } from './StyledComponentGlobal';
import style from './../global/Style';
// import variable from './../global/Variable';
// import color from './../global/Color';

import photo1 from '../asset/photobar/1.jpg';
import photo2 from '../asset/photobar/2.jpg';
import photo3 from '../asset/photobar/3.jpg';

/**
takes arr of strings as photoArr prop
if photoArr is undefined, ./../global/Variable.photoBarSrcArr is used
*/

const PhotoBar = observer(() =>
  (
    <PhotoBarContainer>
      <picture key='photo-1'>
        <Image src={photo1} alt='action' />
      </picture>
      <picture key='photo-2'>
        <Image src={photo2} alt='action' />
      </picture>
      <picture key='photo-3'>
        <Image src={photo3} alt='action' />
      </picture>
    </PhotoBarContainer>
  ));

const PhotoBarContainer = styled.div`
  ${style.cssSnippets.flexRow}
  box-sizing: border-box;
  width: 100%;
  picture {
    flex: 1;
    position: relative;
    animation: ${slideDownAnimation};
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

// PhotoBar.propTypes = {
//   photoArr: PropTypes.arrayOf(PropTypes.string)
// };
//
// PhotoBar.defaultProps = {
//   photoArr: variable.photoBarSrcArr
// };

export default PhotoBar;
