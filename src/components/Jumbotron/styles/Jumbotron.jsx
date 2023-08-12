import styled from 'styled-components';

export const Container = styled.section`
  display: block;
  background-color: #000000;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #232323;
  padding: 4.5rem 0;
  color: #f8fafc;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1140px;
  padding: 0 2rem;
  width: 100%;
  margin: auto;
  gap: 1.5rem 12px;
  @media (max-width: 60rem) {
    padding: 0 1.5rem;
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  flex-basis: 50%;
  @media (max-width: 60rem) {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2.75rem;
  line-height: 1.1;

  @media (max-width: 60rem) {
    font-size: 2rem;
    font-weight: 700;
  }
`;
export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1.25rem;
  line-height: 1.5;
  @media (max-width: 60rem) {
    font-size: 1.125rem;
  }
`;

export const Image = styled.img`
  display: block;
  height: auto;
`;
