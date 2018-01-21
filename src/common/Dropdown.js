import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import style from './../global/Style';
// import color from './../global/Color';

const Dropdown = observer(class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleOpenState = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children, iconClass } = this.props;
    return (
      <DropdownContainer>
        <Icon className={`zmdi ${iconClass}`} onClick={this.toggleOpenState} />
        <Options isOpen={this.state.isOpen}>
          {
            children.map(listItem => <Option key={listItem.key}>{ listItem.title }</Option>)
          }
        </Options>
      </DropdownContainer>
    );
  }
});

const DropdownContainer = styled.nav`
  position: relative;
`;

const Icon = styled.i`
  color: black;
`;

const Options = styled.ul`
  ${style.cssSnippets.flexColumn}
  margin: 0;
  padding: 0;
  align-items: flex-start;
  position: absolute;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  list-style-type: none;
`;

const Option = styled.li`
`;

Dropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  iconClass: PropTypes.string
};

Dropdown.defaultProps = {
  iconClass: 'zmdi-menu'
};

export default Dropdown;
