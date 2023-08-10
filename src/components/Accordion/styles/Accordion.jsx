import { css, styled } from 'styled-components';
import { Title as JumbotronTitle } from '../../Jumbotron/styles/Jumbotron';
import { ReactComponent as Plus } from '../../../images/icons/plus.svg';

export const Container = styled.section`
  background: #000;
  color: #fff;
  padding: 3.75rem 2rem;
  border-bottom: 8px solid #232323;
`;
export const Inner = styled.div`
  max-width: 1140px;
  margin: auto;
`;
export const Title = styled(JumbotronTitle)`
  text-align: center;
`;

export const Frame = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & + * {
    margin-top: 2.875rem;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const Header = styled.button`
  font-size: 1.5rem;
  background-color: ${({ $isActive }) => ($isActive ? '#4e4e4e' : '#2d2d2d')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  transition: background 0.3s;
  user-select: none;
  line-height: 1.5;
  &:focus-visible {
    outline: solid 2px #fff;
  }
  &:hover {
    background: #4e4e4e;
  }
  @media (max-width: 60rem) {
    font-size: 1.25rem;
  }
`;

export const HeaderIcon = styled(Plus)`
  width: 2.25rem;
  height: 2.25rem;
  margin-left: 0.5rem;
  flex-shrink: 0;
  transition: 0.2s;
  transform: ${({ $isActive }) => ($isActive ? 'rotate(-45deg)' : 'initial')};
  @media (max-width: 60rem) {
    width: 1rem;
    height: 1rem;
  }
`;

export const Body = styled.section`
  background-color: #2d2d2d;
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.2s ease-out;
  visibility: collapse;
  ${({ $isActive }) =>
    $isActive &&
    css`
      visibility: visible;
      grid-template-rows: 1fr;
      padding: 1.5rem 0;
    `}
`;

export const BodyContent = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  white-space: pre-line;
  overflow: hidden;
  padding: 0 1.5rem;
  @media (max-width: 60rem) {
    font-size: 1.25rem;
  }
`;
