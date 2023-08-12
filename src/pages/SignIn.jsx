import React from 'react';
import { Feature, Form } from '../components';
import { FormProvider } from '../context/FormContext/FormContext';
import { validateEmail, fieldHelperContent, validatePassword } from '../helpers/form';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import * as ROUTES from '../constants/routes';

async function handleSubmit(data) {
  console.log(data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const SignIn = () => {
  return (
    <>
      <HeaderContainer showButton={false}>
        <Feature style={{ paddingLeft: 0, paddingRight: 0 }}>
          <FormProvider onSubmit={handleSubmit}>
            <Form.Card>
              <Form.Title>Entrar</Form.Title>
              <Form>
                <Form.Field name="email" validate={validateEmail}>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Input id="email" type="text" autoComplete="email" />
                  <Form.FieldHelper
                    helperContent={fieldHelperContent}
                    style={{ color: '#e87c03' }}
                  />
                </Form.Field>
                <Form.Field name="password" validate={validatePassword}>
                  <Form.Label htmlFor="password">Senha</Form.Label>
                  <Form.Input id="password" type="password" autoComplete="off" />
                  <Form.TogglePassword />
                  <Form.FieldHelper
                    helperContent={fieldHelperContent}
                    style={{ color: '#e87c03' }}
                  />
                </Form.Field>

                <Form.Submit>Entrar</Form.Submit>
              </Form>
              <Form.Other>
                <Form.Text>
                  Novo por aqui? <Form.Link to={ROUTES.SIGN_UP}>Assine agora.</Form.Link>
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

export default SignIn;
