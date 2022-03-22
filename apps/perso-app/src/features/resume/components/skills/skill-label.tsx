import styled from '@emotion/styled';
import React from 'react';
import type { SkillRecord } from './skills-panel';

const UnstyledSkillLabel: React.FC<{
  skill: SkillRecord;
  className?: string;
  chilren?: never;
}> = (props) => {
  const { skill, className } = props;
  const { name, years } = skill;
  return (
    <div className={`${className}`}>
      {name}{' '}
      {years && years >= 1 && <span className="years"> &gt;{years}y</span>}
    </div>
  );
};

export const SkillLabel = styled(UnstyledSkillLabel)`
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  font-size: 0.9em;
  flex: 1 1 100%;
  span.years {
    margin-left: 5px;
    padding: 0px 5px 0px 5px;
    background-color: #fefefe;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.12);
  }
`;
