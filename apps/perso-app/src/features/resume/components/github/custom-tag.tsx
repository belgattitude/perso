import styled from '@emotion/styled';
import React from 'react';

const UnstyledCustomTag: React.FC<{
  className?: string;
  title: string;
  children?: never;
}> = (props) => {
  const { className, title } = props;
  return <span className={className}>{title}</span>;
};

export const CustomTag = styled(UnstyledCustomTag)`
  font-weight: 300;
  font-size: 0.7em;
  color: #888;
  border: 1px #eee solid;
  padding: 2px 5px;
  border-radius: 2px;
  min-width: 3rem;
  text-align: center;
  line-height: 25px;
  height: 25px;
  margin: 0px 3px;
  box-sizing: border-box;
  :first-of-type {
    margin-left: 0;
  }
`;
