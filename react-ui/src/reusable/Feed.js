import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// modified from https://hackernoon.com/improve-your-ux-by-dynamically-rendering-images-via-react-onload-393fd4d0d946

class ImageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadedItems: [] };
  }
  onLoad(feedItem) {
    this.setState(({ loadedItems }) =>
      ({ loadedItems: loadedItems.concat(feedItem) }));
  }
  render() {
    return (
      <div className='feed'>
        {this.state.loadedItems.map(item =>
          (<FeedItem
            imgPath={item.imgPath}
            name={item.name}
            key={item.name}
          />))}
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem />
        }
        <div style={{ display: 'none' }}>
          {this.props.items.map(item =>
            (<img
              src={item.imgPath}
              onLoad={this.onLoad.bind(this, item)}
              key={item.imgPath}
              alt=''
            />))}
        </div>
      </div>
    );
  }
}

ImageFeed.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

// ImageFeed.defaultProps = {
// };

const FeedItem = styled.img`

`;

const LoadingItem = styled.div`

`;

export default ImageFeed;
