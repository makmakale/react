import styled from 'styled-components';

export const FullScreenImage = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .close {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }

  img {
    width: auto;
    height: 80%;
  }
`;
