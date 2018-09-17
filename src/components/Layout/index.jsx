import React from 'react';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import { Margin } from 'styled-components-spacing';

import Header from '../Header';
import Menu from '../Menu';

const Container = styled.div`
  padding: 15px 25px;
  background: #424242;
`;

const Layout = props => {
  const { children } = props;

  return (
    <Container>
      <ScrollUpButton />
      <main>
        <Margin bottom={3}>
          <Header>
            <Menu />
          </Header>
        </Margin>
        {children}
      </main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
