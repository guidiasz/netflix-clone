import React from 'react';
import { Inner, Item, Container, Pane, Title, Subtitle, Image } from './styles/Jumbotron';

const Jumbotron = ({ children, direction, ...props }) => {
  return (
    <>
      <Item {...props}>
        <Inner direction={direction}>{children}</Inner>
      </Item>
    </>
  );
};

Jumbotron.Container = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Jumbotron.Pane = ({ children, ...props }) => {
  return <Pane {...props}>{children}</Pane>;
};

Jumbotron.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

Jumbotron.Subtitle = ({ children, ...props }) => {
  return <Subtitle {...props}>{children}</Subtitle>;
};

Jumbotron.Image = ({ ...props }) => {
  return <Image {...props} />;
};

export default Jumbotron;
