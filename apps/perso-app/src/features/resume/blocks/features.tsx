import styled from '@emotion/styled';
import type { FC } from 'react';
import { breakpoints } from '@/config';

type FeaturesProps = {
  className?: string;
  children?: never;
};

const UnstyledFeatures: FC<FeaturesProps> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <h1>What do I do ?</h1>
      <h2>and what you might be interested in</h2>
      <div className={'card-container'}>
        <div>
          <h3>Programming</h3>
          <p>
            Enthusiast coder but product minded first. I like to see something
            come to life.
          </p>
        </div>
        <div>
          <h3>Quality</h3>
          <p>
            Implementing project conventions, code best practices, tests and
            integration.
          </p>
        </div>
        <div>
          <h3>Modern Tooling</h3>
          <p>
            Modern tools to facilitate project workflows, ensure quality and
            improve developer life.
          </p>
        </div>
        <div>
          <h3>Documentation</h3>
          <p>
            Doc and technical writer, markdown addict and interested in
            pedagogy.
          </p>
        </div>
        <div>
          <h3>Experience</h3>
          <p>
            B2B ecommerce • logistics & geo • statistics & BI • SPA/PWA • track
            & trace • ...
          </p>
        </div>
        <div>
          <h3>System integration</h3>
          <p>
            Developing integrations can reveal useful. Got my hands on few of
            them, even SAP...
          </p>
        </div>
      </div>
    </div>
  );
};

export const Features = styled(UnstyledFeatures)<FeaturesProps>`
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
