import styled from 'styled-components';

export const Chip = styled.div`
  max-width: 100%;
  font-size: 0.8125rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  color: white;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 16px;
  white-space: nowrap;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-decoration: none;
  border: 0;
  padding: 0;
  vertical-align: middle;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;
    padding-right: 12px;
    white-space: nowrap;
  }
`;
