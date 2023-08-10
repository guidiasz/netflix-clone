import styled from 'styled-components';

export const Container = styled.div`
  max-width: calc(960px+2rem);
  margin: 0 auto;
  padding: 7rem 2rem;
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  @media (max-width: 60rem) {
    font-size: 2rem;
  }
  @media (max-width: 36rem) {
    text-align: left;
  }
`;
export const Subtitle = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.5rem;
  & + * {
    margin-top: 1.5rem;
  }
  @media (max-width: 60rem) {
    font-size: 1.125rem;
  }
  @media (max-width: 36rem) {
    text-align: left;
  }
`;
