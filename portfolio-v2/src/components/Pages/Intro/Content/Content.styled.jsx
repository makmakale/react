import styled from 'styled-components';

export const ContentList = styled.ul``;
export const ContentListItem = styled.li`
  margin-top: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  span:first-child {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
