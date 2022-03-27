import styled from '@emotion/styled';

export const AboutMeCtn = styled.div`
  a,
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
    padding: 0;
  }
`;
