import React from 'react';
import { OptForm, Form } from '../components';
import { FormProvider } from '../context/FormContext/FormContext';
import { ReactComponent as ArrowIcon } from '../images/icons/arrow.svg';

import { validateEmail, fieldHelperContent, formHelperContent } from '../helpers/form';

async function handleSubmit(data) {
  console.log('Form Data:', data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const OptFormContainer = () => {
  return (
    <FormProvider onSubmit={handleSubmit}>
      <OptForm>
        <OptForm.Title>
          Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
        </OptForm.Title>
        <OptForm.Container>
          <OptForm.Field name="email" validate={validateEmail}>
            <OptForm.Label htmlFor="email">Email</OptForm.Label>
            <OptForm.Input id="email" type="text" autoComplete="email" />
            <OptForm.FieldHelper helperContent={fieldHelperContent} />
          </OptForm.Field>
          <OptForm.Submit>
            Vamos lá <ArrowIcon />
          </OptForm.Submit>
          <OptForm.Helper
            style={{ flexBasis: '100%', flexGrow: 1, order: 1 }}
            helperContent={formHelperContent}
          />
        </OptForm.Container>
      </OptForm>
    </FormProvider>
  );
};

export default OptFormContainer;
