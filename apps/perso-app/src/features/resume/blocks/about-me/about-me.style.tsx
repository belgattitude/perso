import styled from '@emotion/styled';
import type { FC } from 'react';

export const AboutMeCtn = styled.div`
  a,
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
    padding: 0;
  }
`;
