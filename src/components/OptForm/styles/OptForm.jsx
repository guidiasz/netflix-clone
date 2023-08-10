import styled, { css } from 'styled-components';
import DefaultForm from '../../Form';

export const Form = styled(DefaultForm)`
  max-width: 984px;
  margin: 2.875rem auto auto auto;
`;
export const Title = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.875rem;
  @media (max-width: 36rem) {
    text-align: left;
  }
`;
export const Container = styled.div`
  margin: 1rem auto 0;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  max-width: 586px;
  gap: 8px;
`;
