import React from 'react';
import { Feature, Form } from '../components';
import { FormProvider } from '../context/FormContext/FormContext';
import {
  validateEmail,
  fieldHelperContent,
  validatePassword,
  validateUsername,
} from '../helpers/form';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import * as ROUTES from '../constants/routes';

async function handleSubmit(data) {
  console.log(data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const SignUp = () => {
  return (
    <>
      <HeaderContainer>
        <Feature style={{ paddingLeft: 0, paddingRight: 0 }}>
          <FormProvider onSubmit={handleSubmit}>
            <Form.Card>
              <Form.Title>Inscreva-se</Form.Title>
              <Form>
                <Form.Field name="username" validate={validateUsername}>
                  <Form.Label htmlFor="username">Nome de usuário</Form.Label>
                  <Form.Input id="username" type="text" autoComplete="username" />
                  <Form.FieldHelper
                    helperContent={fieldHelperContent}
                    style={{ color: '#e87c03' }}
                  />
                </Form.Field>
                <Form.Field name="email" validate={validateEmail}>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Input id="email" type="text" autoComplete="email" />
                  <Form.FieldHelper
                    helperContent={fieldHelperContent}
                    style={{ color: '#e87c03' }}
                  />
                </Form.Field>
                <Form.Field name="password" validate={validatePassword}>
                  <Form.Label htmlFor="password">Adicione uma senha</Form.Label>
                  <Form.Input id="password" type="password" autoComplete="off" />
                  <Form.TogglePassword />
                  <Form.FieldHelper
                    helperContent={fieldHelperContent}
                    style={{ color: '#e87c03' }}
                  />
                </Form.Field>

                <Form.Submit>Criar conta</Form.Submit>
              </Form>
              <Form.Other>
                <Form.Text>
                  Já possui conta? <Form.Link to={ROUTES.SIGN_IN}>Entrar.</Form.Link>
                </Form.Text>
                <Form.Text style={{ fontSize: '.8125rem' }}>
                  Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um
                  robô.
                </Form.Text>
              </Form.Other>
            </Form.Card>
          </FormProvider>
        </Feature>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
