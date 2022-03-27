import styled from '@emotion/styled';
import { breakpoints } from '@/config';

export const FeaturesCtn = styled.div`
  div.card-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;

    div {
      flex: 1 1 auto;

      width: 50%;
      @media all and (${breakpoints.large}) {
        width: 33.33%;
      }
      h3 {
        font-size: 1em;
        font-weight: 500;
        letter-spacing: 0.025em;
        padding: 0;
      }
      > p {
        margin: 5px;
      }
    }
  }
`;
