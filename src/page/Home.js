import React from 'react';
import styled from 'styled-components';

import PhotoBar from './../common/PhotoBar';

// import style from './../global/Style';
// import color from './../global/Color';

const Home = () =>
  (
    <Container>
      <PhotoBar />
      home
    </Container>
  );

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export default Home;
