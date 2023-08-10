import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, ButtonLink, Container, Content, Logo } from './styles/Header';

const Header = ({ bg = true, children, ...props }) => {
  return <>{bg ? <Background {...props}>{children}</Background> : children}</>;
};

const HeaderFrame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
Header.Frame = HeaderFrame;

const HeaderContent = ({ children, ...props }) => {
  return <Content {...props}>{children}</Content>;
};
Header.Content = HeaderContent;

const HeaderLogo = ({ to, ...props }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...props} />
    </ReactRouterLink>
  );
};
Header.Logo = HeaderLogo;

const HeaderButtonLink = ({ to, ...props }) => {
  return <ButtonLink {...props} />;
};
Header.ButtonLink = HeaderButtonLink;

export default Header;
