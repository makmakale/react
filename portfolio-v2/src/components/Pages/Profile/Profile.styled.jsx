import { mobileOrTabletWidth } from '@/common/constants/media';
import styled from 'styled-components';

export const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: .25rem solid ${(props) => props.theme.primaryColor};
  overflow: hidden;

  img {
    height: 100%;
  }
`;

export const ProfileName = styled.h1`
  font-size: 2.7rem;
  line-height: 1;

  @media screen and (${mobileOrTabletWidth}) {
    font-size: 2.2rem;
  }
`;
export const ProfileJobTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

export const ProfileDescription = styled.p`
  text-align: justify;
  text-indent: 1.5rem;
`;

export const ProfileSection = styled.div`
  position: relative;
  width: 90%;
  padding-top: 20px;
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: .6rem;
  margin-top: 1rem;

  @media screen and (${mobileOrTabletWidth}) {
    width: 100%;
  }
`;

export const ProfileSectionTitle = styled.h3`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -15px;
  width: 150px;
  height: 30px;
  border-radius: 15px;
  text-transform: uppercase;
  color: ${(props) => props.theme.primaryColor};
  background: ${(props) => props.theme.whiteColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  font-size: 1rem;
  transition: 500ms;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.whiteColor};
    background: ${(props) => props.theme.primaryColor};
    border-color: ${(props) => props.theme.whiteColor};
  }
`;

export const ProfileTable = styled.table`
  margin-bottom: .5rem;
  width: 100%;

  tr {
    margin-top: 5px;
    margin-bottom: 5px;

    &:nth-child(odd) {
      background: #eee;
    }

    td {
      padding: 3px 7px;

      &:first-child {
        font-weight: 600;
      }

      .small {
        margin-left: .5rem;
        font-size: .8rem;
        color: #777;
      }

      a {
        color: ${(props) => props.theme.primaryColor};
        text-decoration: none;
      }
    }
  }
`;

export const ProfileDownloadCV = styled.a`
  position: relative;
  padding: 10px 20px;
  font-family: monospace;
  font-size: 1.4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  box-shadow: 0 10px 30px rgba(0, 0, 0, .5);
  overflow: hidden;
  cursor: pointer;
  transition: 500ms;
  text-decoration: none;

  &:hover {
    box-shadow: 0 10px 30px ${(props) => props.theme.primaryColor};
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 100%;
    background: rgba(255, 255, 255, .15);
    transform: skewX(45deg) translateX(-50%);
  }

  span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right,
    ${({ theme }) => theme.primaryColorDark}, ${({ theme }) => theme.primaryColorLight});
    animation: animateSpan1 2s linear infinite;
  }

  span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom,
    ${({ theme }) => theme.primaryColorDark}, ${({ theme }) => theme.primaryColorLight}););
    animation: animateSpan2 2s linear infinite;
  }

  span:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left,
    ${({ theme }) => theme.primaryColorDark}, ${({ theme }) => theme.primaryColorLight}););
    animation: animateSpan3 2s linear infinite;
  }

  span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top,
    ${({ theme }) => theme.primaryColorDark}, ${({ theme }) => theme.primaryColorLight}););
    animation: animateSpan4 2s linear infinite;
  }

  @keyframes animateSpan1 {
    0% {
      transform: translateX(-100%)
    }
    100% {
      transform: translateX(100%)
    }
  }
  @keyframes animateSpan2 {
    0% {
      transform: translateY(-100%)
    }
    100% {
      transform: translateY(100%)
    }
  }
  @keyframes animateSpan3 {
    0% {
      transform: translateX(100%)
    }
    100% {
      transform: translateX(-100%)
    }
  }
  @keyframes animateSpan4 {
    0% {
      transform: translateY(100%)
    }
    100% {
      transform: translateY(-100%)
    }
  }
`;
