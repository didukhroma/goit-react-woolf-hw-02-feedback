import styled from 'styled-components';

export const StyledButton = styled('button')`
  padding: 4px 8px;
  font-size: 1em;

  border: 1px solid rgba(93, 81, 81, 0.5);
  border-radius: 4px;

  background-color: transparent;

  transition: color 200ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    color: #fff;
    background-color: rgba(93, 81, 81, 0.5);
    transform: scale(1.02);
  }
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
