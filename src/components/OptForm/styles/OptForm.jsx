import styled, { css } from 'styled-components';
import DefaultForm from '../../Form';

export const Form = styled(DefaultForm)`
  max-width: 984px;
  margin-left: auto;
  margin-right: auto;
`;
export const Title = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.875rem;
  @media (max-width: 60rem) {
    font-size: 1.125rem;
  }
  @media (max-width: 36rem) {
    text-align: left;
  }
`;

export const Field = styled(DefaultForm.Field)``;
export const Label = styled(DefaultForm.Label)``;
export const Input = styled(DefaultForm.Input)``;
export const FieldHelper = styled(DefaultForm.FieldHelper)``;
export const Helper = styled(DefaultForm.Helper)``;

export const Container = styled.div`
  margin: 1rem auto 0;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  max-width: 586px;
  gap: 8px;
`;

export const Submit = styled(DefaultForm.Submit)`
  font-size: 1.5rem;
  font-weight: 700;
  height: 58px;
  width: auto;
  padding: 0.75rem 24px;
  margin-top: 0;
`;
