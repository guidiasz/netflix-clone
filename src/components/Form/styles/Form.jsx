import styled, { css } from 'styled-components';

export const statusColorMap = {
  valid: '#2bb871',
  invalid: '#eb3942',
};

export const Container = styled.form``;

export const Floating = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 1.05rem;
  left: 1rem;
  z-index: 1;
  height: 100%;
  line-height: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  display: inline;
  pointer-events: none;
  transition-property: top, font-size, line-height;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${({ $isActive, $isFilled }) =>
    ($isActive || $isFilled) &&
    css`
      top: 0.5rem;
      transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
      line-height: 1.125rem;
      font-size: 0.75rem;
    `}
`;

export const Input = styled.input`
  min-width: 200px;
  padding: 1.5rem 1rem 0.5rem;
  outline-offset: 2px;
  width: 100%;
  border: solid 1px rgba(128, 128, 128, 0.7);
  color: transparent;
  border-radius: 0.25rem;
  line-height: 1.5rem;
  color: #fff;
  background: rgba(22, 22, 22, 0.7);
  display: flex;
  align-items: center;
  height: 58px;
  border-color: ${({ $status }) => statusColorMap[$status]};
  &:focus,
  &:active {
    outline: 2px solid #fff;
  }
`;

export const Helper = styled.p`
  color: ${({ $status }) => statusColorMap[$status]};
  font-size: 0.8125rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.3rem;
`;

export const Submit = styled.button`
  color: #fff;
  display: inline-flex;
  padding: 0.75rem 24px;
  height: 58px;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: #e50914;
  transition: background-color 0.25s cubic-bezier(0.9, 0, 0.51, 1);
  border-radius: 0.1875rem;
  &:hover,
  &:focus-visible {
    background-color: #c11119;
  }
  &:focus-visible {
    outline: solid 2px #fff;
  }
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      background-color: rgba(229, 9, 20, 0.8);
    `}
`;

export const Spinner = styled.div`
  display: inline-flex;
  position: relative;
  width: 30px;
  height: 30px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 3px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
