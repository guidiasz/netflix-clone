import React from 'react';
import { Container, Form, Title } from './styles/OptForm';

const OptForm = ({ children, ...props }) => {
  return (
    <>
      <Form {...props}>{children}</Form>
    </>
  );
};

const OptFormTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
OptForm.Title = OptFormTitle;

const OptFormContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
OptForm.Container = OptFormContainer;

export default OptForm;
