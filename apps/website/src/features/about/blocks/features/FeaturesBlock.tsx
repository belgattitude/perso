import type { FC } from 'react';
import { BlockTitle } from '@/features/about/blocks';
import { FeaturesCtn } from '@/features/about/blocks/features/styles';

type FeaturesProps = {
  className?: string;
};

export const FeaturesBlock: FC<FeaturesProps> = (props) => {
  const { className } = props;
  return (
    <FeaturesCtn className={className}>
      <BlockTitle
        title={'What do I do ?'}
        subtitle={'and what you might be interested in'}
      />
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
    </FeaturesCtn>
  );
};
