import { mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

const PERIOD_WIDTH = 60;
const PERIOD_HEIGHT = 80;
const GAP = 10;

export const EduTimeline = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;

export const EduCard = styled.div`
  position: relative;
  width: calc(50% - 1rem);
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${GAP}px;
  overflow: hidden;

  @media screen and (${mobileWidth}) {
    width: 100%;
    height: 350px;
  }
`;

export const EduCardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f00;
  border-radius: 15px;
  background: ${(props) => (props.image ? `url(${props.image})` : '')};
  background-size: cover;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #fff;
    background: transparent;
  }

  &::before {
    left: ${PERIOD_WIDTH}%;
    bottom: 0;
  }

  &::after {
    left: 0;
    bottom: ${PERIOD_HEIGHT - GAP}px;
  }

  @media screen and (${mobileWidth}) {
    height: 250px;
  }
`;

export const EduCardImageZoom = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 500ms ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #fff;
    background: transparent;
  }

  &::before {
    left: ${PERIOD_WIDTH}%;
    bottom: 0;
  }

  &::after {
    left: 0;
    bottom: ${PERIOD_HEIGHT - GAP}px;
  }

  i {
    color: #fff;
    font-size: 5rem;
    margin-bottom: 50px;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  &:hover {
    background: rgba(0, 0, 0, .5);
    cursor: pointer;

    i {
      opacity: .5;
    }
  }
`;

export const EduCardContent = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 15px;
  border-top-left-radius: 0;
  padding: 15px 20px;
  color: #fff;

  h3 {
    font-size: 1rem;
  }

  p {
    margin-top: 1rem;
    font-size: .8rem;
  }
`;

export const EduCardPeriod = styled.span`
  position: absolute;
  left: 0;
  top: -${PERIOD_HEIGHT}px;
  height: ${PERIOD_HEIGHT}px;
  width: ${PERIOD_WIDTH}%;
  background: ${({ theme }) => theme.primaryColor};
  border-top: 10px solid #fff;
  border-right: 10px solid #fff;
  border-top-right-radius: 25px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-shadow: -10px -10px 0 #fff;
    background: transparent;
  }

  &::after {
    bottom: 0;
    right: -25px;
    box-shadow: -10px 10px 0 ${({ theme }) => theme.primaryColor};
  }

  span {
    position: relative;
    background: #fff;
    padding: 10px 15px;
    margin: 10px;
    display: block;
    border-radius: 7px;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimaryColor};
  }
`;
