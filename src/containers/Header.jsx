import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="src/images/misc/logo.svg" alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Entrar</Header.ButtonLink>
      </Header.Frame>
      <Header.Content>{children}</Header.Content>
    </Header>
  );
};

export default HeaderContainer;
