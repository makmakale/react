import { mobileWidth } from '@/common/constants/media';
import styled from 'styled-components';

const FIRST_BG_COLOR = '#ff3939';
const SECOND_BG_COLOR = '#3ae374';
const THIRD_BG_COLOR = '#5fa7ff';
const FORTH_BG_COLOR = '#af5fff';

export const ProjectsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
    margin-bottom: 1rem;
`;

export const ProjectCardContent = styled.div`
    position: relative;
    display: flex;
    gap: 1rem;
    flex-grow: 1;
    width: 100%;

    h3 {
        text-shadow: 0 0 10px black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(0, 0, 0, .3);
    }
`;

export const ProjectCardContentDetails = styled.div`
    color: #ffffff;
    height: 100%;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
        margin-bottom: .5rem;
    }

    p {
        flex-grow: 1;
    }
`;

export const ProjectCardButtonsGroup = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 1rem;

    @media screen and (${mobileWidth}) {
        flex-direction: column;
        text-align: center;
    }

    a {
        color: #fff;
        padding: 10px 15px;
        text-decoration: none;
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-shadow: 1px 1px 2px black;
    }
`;

export const ProjectCardImage = styled.div`
    position: relative;
    width: 100%;
    max-width: 180px;
    padding: 10px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 500px;
        height: 150px;
        background: linear-gradient(transparent, #ff3c7b, #ff3c7b, #ff3c7b, transparent);
        animation: animateCardImageLines 6s linear infinite;
    }

    &::after {
        position: absolute;
        content: '';
        inset: 3px;
        background: #292929;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
    }

    @keyframes animateCardImageLines {
        0% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
    }
`;

export const ProjectLines = styled.div`
    position: absolute;
    inset: 0;
    background: #000;
    overflow: hidden;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 600px;
        height: 120px;
        background: linear-gradient(transparent, #45f3ff, #45f3ff, #45f3ff, transparent);
        animation: animateCardLines 4s linear infinite;
    }

    &::after {
        position: absolute;
        content: '';
        inset: 3px;
        background: ${({ theme }) => theme.projectBg};
    }

    @keyframes animateCardLines {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;

export const ProjectCard = styled.div`
    position: relative;
    width: 100%;
    background: ${({ theme }) => theme.primaryColorDark};
    transition: .5s;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 1rem;

    &:nth-child(1) {
        ${ProjectCardContent} {
            h3 {
                color: ${FIRST_BG_COLOR};
            }
        }

        ${ProjectCardButtonsGroup} {
            a {
                background: ${FIRST_BG_COLOR};
            }
        }
    }

    &:nth-child(2) {
        ${ProjectLines},
        ${ProjectCardImage} {
            &::before {
                animation-delay: .5s;
            }
        }

        ${ProjectCardContent} {
            h3 {
                color: ${SECOND_BG_COLOR};
            }
        }

        ${ProjectCardButtonsGroup} {
            a {
                background: ${SECOND_BG_COLOR};
            }
        }
    }

    &:nth-child(3) {
        ${ProjectLines},
        ${ProjectCardImage} {
            &::before {
                animation-delay: 1s;
            }
        }

        ${ProjectCardContent} {
            h3 {
                color: ${THIRD_BG_COLOR};
            }
        }

        ${ProjectCardButtonsGroup} {
            a {
                background: ${THIRD_BG_COLOR};
            }
        }
    }

    &:nth-child(4) {
        ${ProjectLines},
        ${ProjectCardImage} {
            &::before {
                animation-delay: 1.5s;
            }
        }

        ${ProjectCardContent} {
            h3 {
                color: ${FORTH_BG_COLOR};
            }
        }

        ${ProjectCardButtonsGroup} {
            a {
                background: ${FORTH_BG_COLOR};
            }
        }
    }
`;
