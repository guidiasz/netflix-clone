import React from 'react';
import { Container, Subtitle, Title } from './styles/Feature';

const Feature = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const FeatureTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
Feature.Title = FeatureTitle;

const FeatureSubtitle = ({ children, ...props }) => {
  return <Subtitle {...props}>{children}</Subtitle>;
};
Feature.Subtitle = FeatureSubtitle;
export default Feature;
