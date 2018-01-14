import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Error from './../../asset/Error.js';
import NavTitleRow from './../../asset/NavTitleRow.js';
import Podcast from './Podcast.js';

import color from './../../global/Color.js';
import s from './../../global/Strings.js';

import navigationStore from './../../store/NavigationStore.js';

const Category = ({ podcastArr }) => {
  if (!podcastArr) {
    return <Error message={'There was an error fetching that category'} />
  }
  return (
    <CategoryContainer>
      <NavTitleRow
        title={'h'}
        navText={s.en.category.discover}
        navFunc={navigationStore.setObservablesToDefault} />
      <Categories>
        {
          podcastArr.map(podcast =>
            <Podcast key={podcast.title} podcast={podcast} />
        )}
      </Categories>
    </CategoryContainer>
  );
};

Category.PropTypes = {
  podcastArr: PropTypes.array.isRequired
}

const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const Categories = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 200px;
  color: ${color.primaryTextNegative};
`;

export default Category;
