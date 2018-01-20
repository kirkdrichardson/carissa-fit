import React from 'react';
import styled, { keyframes, withComponent } from 'styled-components';
import PropTypes from 'prop-types';

import strings from './../global/Strings';
import style from './../global/Style';
import variable from './../global/Variable';
import { getStr } from './../util/General';
import color from './../global/Color';
import { MainContentMaxWidth } from './../common/StyledComponentGlobal';

/**
takes arr of strings as photoArr prop
if photoArr is undefined, ./../global/Variable.SignUpBarSrcArr is used
*/

const SignUpBar = ({ photoArr }) => // eslint-disable-line object-curly-newline, max-len
  (
    <SignUpBarContainer>
      <picture>
        <img src='https://picsum.photos/200/300' alt='article cover' />
      </picture>
      <ContentColumn>
        <p>{ getStr(35) }</p>
        <InputRow>
          <Input placeholder='Name' type='text' />
          <Input placeholder='Email' type='text' />
          <Submit
            onClick={() => console.error('SignUpBar submission not configured')}
          >
          { strings.signUpBar.submitButton }
          </Submit>
        </InputRow>
      </ContentColumn>
    </SignUpBarContainer>
  );

// const slideDown = keyframes`
//   from { top: -500px; }
//   to { top: 60px; }
//   `;

const SignUpBarContainer = styled.div`
border: 1px solid red;
  ${style.cssSnippets.flexRow}
  box-sizing: border-box;
  width: 100%;
  color: ${color.white};
  background-color: ${color.blue};
  padding: 20px;
  margin: 20px 0;
`;

const ContentColumn = styled.div`
  ${style.cssSnippets.flexColumn}
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0 20px;
  font-weight: bold;
  p {
    margin: 0;
  }
`;

const InputRow = styled.form`
border: 1px solid white;
  ${style.cssSnippets.flexRow}
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding: 20px 0;
  box-sizing: border-box;
`;


// TODO - add global input styles

const Input = styled.input`
  ${style.input};
  flex: 0 1 ${Math.round(MainContentMaxWidth / 4)}px;
  margin-right: 20px;
`;

const Submit = styled.button`
  ${style.btn}
  ${style.btnPrimary}
  flex: 0 1 ${Math.round(MainContentMaxWidth / 4)}px;
`;

SignUpBar.propTypes = {
};

SignUpBar.defaultProps = {
};

export default SignUpBar;
