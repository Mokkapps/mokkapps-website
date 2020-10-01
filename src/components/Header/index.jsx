import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  padding: 5px 5px 0;

  a {
    text-decoration: none;
    color:#fff;
  }
`;

const Header = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
