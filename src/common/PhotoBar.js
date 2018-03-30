import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import { slideDownAnimation } from './StyledComponentGlobal';
import style from './../global/Style';
import variable from './../global/Variable';
// import color from './../global/Color';

/**
takes arr of strings as photoArr prop
if photoArr is undefined, ./../global/Variable.photoBarSrcArr is used
*/

const PhotoBar = observer(class PhotoBar extends React.Component {
  constructor() {
    super();
    this.state = { loadedItems: [] };
  }

  onLoad(feedItem) {
    this.setState(({ loadedItems }) =>
      ({ loadedItems: loadedItems.concat(feedItem) }));
  }

  render() {
    const { photoArr } = this.props;
    return (
      <PhotoBarContainer>
        { this.state.loadedItems.length === photoArr.length &&
          photoArr.map(srcString => (
            <picture key={srcString}>
              <Image src={srcString} alt='action' />
            </picture>
           ))
        }
        { /* this hidden div loads the images before they are rendered */ }
        <div style={{ display: 'none' }}>
          {photoArr.map(srcString =>
            (<img
              src={srcString}
              onLoad={this.onLoad.bind(this, srcString)}
              key={srcString}
              alt=''
            />))}
        </div>
      </PhotoBarContainer>
    );
  }
});

const PhotoBarContainer = styled.div`
  ${style.cssSnippets.flexRow}
  box-sizing: border-box;
  width: 100%;
  picture {
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

PhotoBar.propTypes = {
  photoArr: PropTypes.arrayOf(PropTypes.string)
};

PhotoBar.defaultProps = {
  photoArr: variable.photoBarSrcArr
};

export default PhotoBar;
