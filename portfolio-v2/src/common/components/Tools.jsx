import { mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

export const ToolsWrapper = styled.div`
  border: 1px solid #ccc;
  position: relative;
  margin-top: 1rem;
  padding: 1rem;
  padding-top: 0;

  .title {
    position: absolute;
    left: 50%;
    height: 30px;
    transform: translate(-50%, -15px);
    background: ${({ theme }) => theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.whiteColor};
    padding: 0 1.5rem;

    @media screen and (${mobileWidth}) {
      width: 90%;
      padding: 0 1rem;
    }

    &::before {
      position: absolute;
      content: '';
      left: -2px;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 15px solid ${({ theme }) => theme.whiteColor};
    }

    &::after {
      position: absolute;
      content: '';
      left: calc(100% - 13px);
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 15px solid ${({ theme }) => theme.whiteColor};
    }
  }
`;

export const ToolsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 2rem;
  justify-content: center;

  @media screen and (${mobileWidth}) {
    gap: 5px;
  }
`;
