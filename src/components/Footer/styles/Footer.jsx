import styled from 'styled-components';

export const Container = styled.footer`
  background: black;
  padding: 3.75rem 2rem;
`;

export const Inner = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  flex-direction: column;
  max-width: 1140px;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  padding: 0.75rem 0;
  flex-wrap: wrap;
  row-gap: 0.75rem;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.75rem;
  flex-basis: 33.33%;
  min-width: 224px;
`;

export const Link = styled.a`
  text-decoration: underline;
  display: inline-flex;
  &:focus-visible {
    outline: solid 2px #fff;
  }
`;

export const Title = styled.p`
  padding: 0.75rem 0;
`;

export const Text = styled.p`
  padding: 0.75rem 0;
`;
