import styled from '@emotion/styled';
import type { FC } from 'react';
import MDXContent from './Summary.mdx';

const StyledSummary = styled(MDXContent)``;

export const Summary: FC = () => {
  return (
    <div>
      <StyledSummary />
    </div>
  );
};
