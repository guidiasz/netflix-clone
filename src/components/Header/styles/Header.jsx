import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url('/src/images/misc/header-bg.jpg');
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  color: #fff;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  width: calc(100% - 4rem);
  margin: 0 auto;
  padding: 1.5rem 0;
  color: #fff;
`;

export const Logo = styled.img`
  width: 148px;
  height: auto;
  @media (max-width: 60rem) {
    width: 89px;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
  background-color: #e50914;
  padding: 0.5625rem 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s cubic-bezier(0.9, 0, 0.51, 1);
  &:hover,
  &:focus-visible {
    background-color: #c11119;
  }
  &:focus-visible {
    outline: solid 2px #fff;
  }
`;
