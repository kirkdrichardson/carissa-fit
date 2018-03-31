import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import style from './../global/Style';
// import color from './../global/Color';

const Dropdown = observer(class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  // https://github.com/eslint/eslint/issues/4683
  toggleOpenState = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children, iconClass } = this.props;
    return (
      <DropdownContainer>
        <i className={`zmdi ${iconClass}`} onClick={this.toggleOpenState} />
        <Options
          isOpen={this.state.isOpen}
          onClick={this.toggleOpenState}
          onMouseLeave={this.toggleOpenState}
        >
          {
            children.map(listItem =>
              <li
                key={listItem.key}
                id={listItem.key}
                data-id={listItem.key}
                onClick={listItem.onClick}
              >
                <Link to={listItem.href} style={styles.link}>
                  { listItem.title }
                </Link>
              </li>
            )
          }
        </Options>
      </DropdownContainer>
    );
  }
});

const styles = {
  link: {
    textDecoration: 'none',
    display: 'block',
    padding: '12px 26px'
  }
}

const DropdownContainer = styled.nav`
  position: relative;
`;

const Options = styled.ul`
  ${style.cssSnippets.flexColumn}
  margin: 0;
  padding: 0;
  align-items: flex-start;
  position: absolute;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  list-style-type: none;
  li {
    cursor: pointer;
    padding: 0;
    a {
      color: #373737;
    }
    a:visited {
      color: #373737;
    }
  }
`;

// const Triangle = styled.div`
//   position: absolute;
//   top: -20px;
//   right: 20px;
//   height: 20px;
//   width: 20px;
//   width: 0;
//   height: 0;
//   border-left: 26px solid transparent;
//   border-right: 26px solid transparent;
//   border-bottom: 22px solid #857c7c;
// `;

Dropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  iconClass: PropTypes.string
};

Dropdown.defaultProps = {
  iconClass: 'zmdi-menu'
};

export default Dropdown;
