import { mobileOrTabletWidth } from '@/common/constants/media';
import styled from 'styled-components';

const PageBtn = styled.span`
  position: absolute;
  bottom: .35rem;
  right: .35rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondaryColor};
  transition: 500ms;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  @media screen and (${mobileOrTabletWidth}) {
    display: none;
  }
`;

export const PrevPage = styled(PageBtn)`
  transform: rotateY(-180deg);
`;

export const NextPage = styled(PageBtn)``;
