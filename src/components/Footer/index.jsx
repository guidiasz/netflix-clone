import React from 'react';
import { Container, Inner, Row, Column, Link, Title, Text } from './styles/Footer';

const Footer = ({ children, ...props }) => {
  return (
    <Container>
      <Inner {...props}>{children}</Inner>
    </Container>
  );
};

const FooterRow = ({ children, ...props }) => {
  return <Row {...props}>{children}</Row>;
};
Footer.Row = FooterRow;

const FooterColumn = ({ children, ...props }) => {
  return <Column {...props}>{children}</Column>;
};
Footer.Column = FooterColumn;

const FooterLink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};
Footer.Link = FooterLink;

const FooterTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
Footer.Title = FooterTitle;

const FooterText = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
Footer.Text = FooterText;

export default Footer;
