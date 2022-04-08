import styled from '@emotion/styled';

const MyH1 = styled.h1`
  font-weight: 500;
`;
const MyH2 = styled.h2`
  font-weight: 400;
`;
const MyParagraph = styled.p`
  font-weight: 300;
`;
export const mdxConfig = {
  h1: MyH1,
  h2: MyH2,
  p: MyParagraph,
};
