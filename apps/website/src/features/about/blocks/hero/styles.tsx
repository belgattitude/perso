import styled from '@emotion/styled';
import { breakpoints } from '@/features/about/config';

export const ProfileHeroCtn = styled.div`
  position: relative;
  height: 100vh;
  // @link https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
  min-height: -webkit-fill-available;
  @media (${breakpoints.large}) {
    height: 100vh;
    //min-height: unset;
    min-height: -webkit-fill-available;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    z-index: 1;
  }
  div.content {
    text-align: center;
    font-size: 1em;
    color: white;
    @media (${breakpoints.large}) {
      font-size: 1.1em;
    }

    h1 {
      font-size: 2em;
      letter-spacing: 0.1em;
      font-weight: 400;
      margin: 15px;
    }
    p {
      font-size: 1.5em;
      font-variant: all-small-caps;
      margin: 0;
      letter-spacing: 0.17em;
      @media (${breakpoints.large}) {
        font-size: 1.5em;
        letter-spacing: 0.19em;
      }
    }
  }
`;
