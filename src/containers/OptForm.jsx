import React from 'react';
import { OptForm, Form } from '../components';
import { FormProvider } from '../context/FormContext/FormContext';
import { ReactComponent as ErrorIcon } from '../images/icons/error.svg';
import { ReactComponent as ArrowIcon } from '../images/icons/arrow.svg';

async function handleSubmit(data) {
  console.log('Form Data:', data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function formHelperContent(status, message) {
  if (status === 'invalid') {
    return (
      <>
        <ErrorIcon />
        {message}
      </>
    );
  }
  if (status === 'valid') {
    return message;
  }
}

function fieldHelperContent(status, message) {
  return status === 'invalid' ? (
    <>
      <ErrorIcon />
      {message}
    </>
  ) : null;
}

function validateEmail(value) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value) return 'O email é obrigatório';
  if (!regex.test(value)) return 'Informe um email válido';

  return null;
}

const OptFormContainer = () => {
  return (
    <FormProvider onSubmit={handleSubmit}>
      <OptForm>
        <OptForm.Title>
          Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
        </OptForm.Title>
        <OptForm.Container>
          <Form.Field name="email" validate={validateEmail}>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input id="email" type="text" autoComplete="email" />
            <Form.FieldHelper helperContent={fieldHelperContent} />
          </Form.Field>
          <Form.Submit>
            Vamos lá <ArrowIcon />
          </Form.Submit>
          <Form.Helper
            style={{ flexBasis: '100%', flexGrow: 1, order: 1 }}
            helperContent={formHelperContent}
          />
        </OptForm.Container>
      </OptForm>
    </FormProvider>
  );
};

export default OptFormContainer;
