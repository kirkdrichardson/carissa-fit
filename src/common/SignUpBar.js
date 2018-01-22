import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import strings from './../global/Strings';
import style from './../global/Style';
// import variable from './../global/Variable';
import { getStr } from './../util/General';
import Color from './../global/Color';
import { MainContentMaxWidth } from './../common/StyledComponentGlobal';

/**
takes arr of strings as photoArr prop
if photoArr is undefined, ./../global/Variable.SignUpBarSrcArr is used
*/

const SignUpBar = observer(({ isTablet, isMobileLarge }) => {
  const handleSubmission = (e) => {
    e.preventDefault();
    throw new Error('SignUpBar, submission not configured');
  };
  // break JSX up into variables for easier window width arrangement
  const picture = (
    <picture>
      <img src='https://picsum.photos/200/300' alt='article cover' />
    </picture>
  );

  const text = (
    <p>{ getStr(30) }</p>
  );

  const inputRow = (
    <InputRow isTablet={isTablet}>
      <input placeholder='Name' type='text' />
      <input placeholder='Email' type='text' />
      <button
        onClick={handleSubmission}
      >
        { strings.signUpBar.submitButton }
      </button>
    </InputRow>
  );

  let contentArrangement = null;

  if (isTablet) {
    contentArrangement = (
      <Column>
        <Row>
          { picture }
          { text }
        </Row>
        { inputRow }
      </Column>
    );
  } else {
    contentArrangement = (
      <Row>
        { picture }
        <Column>
          { text }
          { inputRow }
        </Column>
      </Row>
    );
  }


  return (
    <SignUpBarContainer isTablet={isTablet} isMobileLarge={isMobileLarge}>
      { contentArrangement }
    </SignUpBarContainer>
  );
});

// const slideDown = keyframes`
//   from { top: -500px; }
//   to { top: 60px; }
//   `;

const SignUpBarContainer = styled.div`
  ${style.cssSnippets.flexRow}
  box-sizing: border-box;
  width: 100%;
  color: ${Color.color.textPrimary};
  background-color: ${Color.component.signUpBarBackground};
  padding: 20px;
  margin: 20px 0;
  font-size: 20px;

  img {
    min-width: 100px;
    border-radius: 6px;
    box-shadow: ${style.boxShadowLeft};
  }

  p {
    padding: ${props => (props.isTablet ? '0 30px' : '0px')};
    font-size: ${props => (props.isMobileLarge ? 14 : 18)}px;
    line-height: ${props => (props.isMobileLarge ? 16 : 22)}px;
  }
`;

const Column = styled.div`
  ${style.cssSnippets.flexColumn}
  ${props => (props.isTablet ? style.cssSnippets.flexRow : style.cssSnippets.flexColumn)}
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0 20px;
  font-weight: bold;

  p {
    margin: 0;
  }
`;

const Row = styled.div`
  ${style.cssSnippets.flexRow}
`;

const InputRow = styled.form`
  ${props => (props.isTablet ? style.cssSnippets.flexColumn : style.cssSnippets.flexRow)}
  flex-wrap: nowrap;

  width: 100%;
  justify-content: space-around;
  padding: 20px 0;
  box-sizing: border-box;

  input, button {
    flex: 1;
    max-width: ${props => (props.isTablet ? '' : Math.round(MainContentMaxWidth / 4))}px;
    min-width: ${props => (props.isTablet ? 300 : 250)}px;
    width: 100%;
    margin-bottom: ${props => (props.isTablet ? 12 : 0)}px;
  }

  input {
    ${style.input};
    margin-right: ${props => (props.isTablet ? 0 : 20)}px;
  }

    button {
      ${style.btn}
      ${style.btnPrimary}
    }
`;

SignUpBar.propTypes = {
  isTablet: PropTypes.bool,
  isMobileLarge: PropTypes.bool
};

SignUpBar.defaultProps = {
  isTablet: false,
  isMobileLarge: false
};

export default SignUpBar;
