import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { PageContainer, MainContentWrapper } from './../common/StyledComponentGlobal';
import PhotoBar from './../common/PhotoBar';
import SignUpBar from './../common/SignUpBar';
import BlogCard from './../common/BlogCard';

import routingStore from './../store/RoutingStore';
import style from './../global/Style';
// import color from './../global/Color';

import { getBlogData } from './../data/Generator';
import { getStr } from './../util/General';


// TODO - replace with API
const BLOGS = [...Array(8)].map(() => getBlogData());

const Blog = observer(() =>
  (
    <PageContainer>
      <PhotoBar />
      <MainContentWrapper>
        <SignUpBar
          isTablet={routingStore.isTablet}
          isMobileLarge={routingStore.isMobileLarge}
        >{ getStr(15)}
        </SignUpBar>
        <CardsContainer>
          {
            BLOGS.map(blog =>
              (<BlogCard
                key={blog.id}
                id={blog.id}
                imgSrc={blog.imgSrc}
                title={blog.title}
                previewText={blog.previewText}
                onClick={() => console.warn('not configured')}
              />))
          }
        </CardsContainer>
      </MainContentWrapper>
    </PageContainer>
  ));

const CardsContainer = styled.div`
  ${style.cssSnippets.flexRow}
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px dashed coral;
`;

export default Blog;
