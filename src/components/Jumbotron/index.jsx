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

const JumbotronContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
Jumbotron.Container = JumbotronContainer;

const JumbotronPane = ({ children, ...props }) => {
  return <Pane {...props}>{children}</Pane>;
};
Jumbotron.Pane = JumbotronPane;

const JumbotronTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
Jumbotron.Title = JumbotronTitle;

const JumbotronSubtitle = ({ children, ...props }) => {
  return <Subtitle {...props}>{children}</Subtitle>;
};
Jumbotron.Subtitle = JumbotronSubtitle;

const JumbotronImage = ({ ...props }) => {
  return <Image {...props} />;
};
Jumbotron.Image = JumbotronImage;

export default Jumbotron;
