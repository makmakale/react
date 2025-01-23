import { mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

export const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (${mobileWidth}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CompanyLogo = styled.img`
  height: ${(props) => props.height || 40}px;
  width: auto;

  @media screen and (${mobileWidth}) {
    width: 100%;
    height: auto;
  }
`;

export const WorkPeriod = styled.div`
  font-style: italic;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: relative;
  margin-bottom: auto;
    background-color: #eee;
    padding: .4em .6em;
    border-radius: 9999px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.4);
`;

export const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
  }

  @media screen and (${mobileWidth}) {
    flex-direction: column;
  }
`;

export const ProjectImage = styled.img`
  margin: 0 auto;
  font-style: italic;
  shape-margin: 1rem;
  max-width: 200px;
  height: auto;
  vertical-align: middle;
  outline: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 10px;

  @media screen and (${mobileWidth}) {
    max-width: 100%;
  }
`;

export const ProjectImage2 = styled.img`
  float: left;
  max-width: 200px;
  outline: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 10px;
  margin-right: 1rem;
`;

export const ProjectTable = styled.table`
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
        min-width: 100px;
      }

      .small {
        margin-left: .5rem;
        font-size: .8rem;
        color: #777;
      }
    }
  }
`;

export const ProjectDescription = styled.div`
  text-align: justify;

  p {
    margin-bottom: .5rem;
  }
`;

export const ProjectResponsibilities = styled.ul`
  list-style-type: square;
  margin-left: 20px;
  text-align: justify;
`;

export const SectionTitle = styled.h4`
  text-transform: uppercase;
`;

export const ReferencesGrid = styled.div`

  @media screen and (${mobileWidth}) {
    > div {
      text-align: center;
    }
  }

  p {
    margin-bottom: .3rem;
  }

  a,
  a:focus,
  a:visited,
  a:active {
    color: ${({ theme }) => theme.primaryColor};
    letter-spacing: 1px;
    text-decoration: none;
    transition: .5s;

    &:hover {
      text-shadow: 0 0 5px rgba(0, 0, 0, .3);
    }
  }
`;

export const ReferenceName = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const ReferenceTitle = styled.span`
  font-weight: 600;
  font-style: italic;
  text-decoration: underline;
`;
