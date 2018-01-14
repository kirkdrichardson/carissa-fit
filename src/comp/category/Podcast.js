import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Modal from './../../asset/modal/Modal.js';

import style from './../../global/Style.js';
import color from './../../global/Color.js';
import strings from './../../global/Strings.js';
import { truncateStr } from './../../util/Formatting.js';

 class Podcast extends Component {
   constructor(props) {
     super(props);
     this.state = {
       showDetails: false
     };
   }

   toggleDetailedView = () => {
     this.setState({ showDetails: !this.state.showDetails });
   }

   render() {
     const  s = strings.en.category,
            { podcast } = this.props,
            { showDetails } = this.state;
     if (!podcast) {
       return;
     }
     return (
       <Card>
          {
            Number(podcast.subscribers) > 100 &&
            <PopularTag>{s.popular}</PopularTag>
          }
          <LogoContainer>
            <Logo src={podcast.scaled_logo_url ? podcast.scaled_logo_url : podcast.logo_url} />
          </LogoContainer>
          <Column>
            <Title>{truncateStr(podcast.title, 27)}</Title>
            <DetailsLink onClick={this.toggleDetailedView}>
              {s.details}
            </DetailsLink>
            {
              // showDetails &&
              // <Description>{podcast.description}</Description>
            }
          </Column>
          <Modal showProps={showDetails} />
       </Card>
     );
   }
 }

Podcast.propTypes = {
  podcast: PropTypes.object.isRequired
}

const Card = styled.div`
  display: flex;
  position: relative;
  flex-flow row nowrap;
  margin: 20px 20px 0 0;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: ${color.boxShadow} 1px 1px 6px;
  background: ${color.headerBackground};
  padding: 24px;
`;

const PopularTag = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  background-color: ${color.rubiks.green};
  padding: 4px 8px;
  border-radius: 0 0 4px 4px;
  font-size: 12px;
  font-weight: bold;
`;

const LogoContainer = styled.picture`
  position: relative;
  height: 100px;
  width: 100px;
  margin-right: 20px;
  flex: 0 0 100px;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  height: 100px;
  width: 100px;
`;

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h3`
  font-family: ${style.font.accent};
`;

const DetailsLink = styled.p`
  color: ${color.rubiks.blue};
  cursor: pointer;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
`;

export default Podcast;
