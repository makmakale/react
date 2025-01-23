import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  &.center {
    align-items: center;
  }
`;

export const PageTitle = styled.h1`
  line-height: 1.8;
  border-bottom: 1px solid #ccc;
`;
