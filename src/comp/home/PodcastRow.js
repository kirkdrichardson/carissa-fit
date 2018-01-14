import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TileRow from './../../asset/tile/TileRow.js';
import Tile from './../../asset/tile/Tile.js';

import strings from './../../global/Strings.js';

const PodcastRow = ({ data }) => {
  return (
    <TileRow rowTitle={strings.en.podcastEpisodes}>
      { data.map(e =>
          <Tile
            key={ e.title }
            title={ e.title }
            subTitle={ e.episodeNumber }
            description={e.description}
            imgSrc={e.imgSrc}
            imgLabel={e.imgLabel}
            onClick={() => console.error('not configured, see PodcastRow.js in /comp/home')} />
      )}
    </TileRow>


  );
}

PodcastRow.propTypes = {
  data: PropTypes.array
}

export default PodcastRow;
