// Taken from https://codesandbox.io/s/embla-carousel-parallax-react-ep71f?file=/src/css/embla.css:0-1555

import styled from '@emotion/styled';

export const EmblaCtn = styled.div`
  position: relative;
  background-color: #f7f7f7;
  padding: 20px;
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;
  .viewport {
    overflow: hidden;
    width: 100%;
  }
  .viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .viewport.is-dragging {
    cursor: grabbing;
  }

  .container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
  }
  .slide {
    padding-left: 10px;
    min-width: 80%;
    position: relative;
  }
  .slide__inner {
    position: relative;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .slide__parallax {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    transform: translate(-50%, -50%);
  }
`;

/*
.embla__viewport {
    overflow: hidden;
    width: 100%;
}

.embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
}

.embla__viewport.is-dragging {
    cursor: grabbing;
}

.embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
}

.embla__slide {
    padding-left: 10px;
    min-width: 80%;
    position: relative;
}

.embla__slide__inner {
    position: relative;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.embla__slide__parallax {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    transform: translate(-50%, -50%);
}

.embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    fill: #1bcacd;
    padding: 0;
}

.embla__button:disabled {
    cursor: default;
    opacity: 0.3;
}

.embla__button__svg {
    width: 100%;
    height: 100%;
}

.embla__button--prev {
    left: 27px;
}

.embla__button--next {
    right: 27px;
}
*/
