import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import { BlockTitle } from '@/features/about/blocks';
import { defaultSection, skillsRecords } from '@/features/about/config';
import type { SkillsPanelProps } from '../../components/Skills';
import * as S from './styles';

export type TechnosBlockProps = {
  className?: string;
};

const SkillsPanel = dynamic<SkillsPanelProps>(
  () =>
    import('../../components/Skills/SkillsPanel').then(
      (mod) => mod.SkillsPanel
    ),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);

export const TechnosBlock: FC<TechnosBlockProps> = (props) => {
  const { className } = props;
  return (
    <S.TechnosCtn className={className}>
      <BlockTitle
        title={'Technos'}
        subtitle={'what do I work with (and relics) ?'}
      />
      <SkillsPanel
        skills={skillsRecords}
        defaultSection={defaultSection}
        css={css`
          margin-bottom: 30px;
        `}
      />
      <BlockTitle title={'Areas'} subtitle={'Areas of expertise'} />
      <h3 className={'highlight'}>Frontend</h3>
      <p>
        When working on frontend I mainly code with the <strong>react</strong>/
        <strong>typescript</strong> combo and its associated ecosystem (redux,
        css-in-js, jest, webpack, babel...). Initially got my hands on them
        around 2015 moving away from AngularJs and ExtJs.
      </p>

      <h3 className={'highlight'}>Backend</h3>

      <p>
        Occasionally in <strong>node / express</strong>, but most of the time in{' '}
        <strong>PHP</strong>. Been through frameworks like Zend or Symfony after
        having committed my own in a very past life. Concepts like MVC, DI, IoC,
        ORM, SOLID... have been slowly integrated along the years. Nowadays and
        following the api centric trends, I generally work with micro-frameworks
        (psr) and prefer thinking of architecture than style.
      </p>

      <h3 className={'highlight'}>Database</h3>

      <p>
        Have a long story with SQL and relational databases (design, complex
        queries, optimizations, triggers, procedures, cte,...). Had to deal with
        analytics and ecommerce for a while...
      </p>

      <h3 className={'highlight'}>Architecture</h3>
      <p>
        In the recent years, I sensed the need to improve my knowledge of
        application architecture (DDD, clean architecture...), something that I
        always felt missing or too partially understood. A lifetime process...
      </p>

      <h3 className={'highlight'}>Project Management</h3>
      <p>Project planning, task estimation... Scrum context or others.</p>
    </S.TechnosCtn>
  );
};
