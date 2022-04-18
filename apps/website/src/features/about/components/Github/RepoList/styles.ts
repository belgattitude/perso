import styled from '@emotion/styled';

export const RepoListCtn = styled.div`
  margin: 0;
  padding: 0;
  line-height: 1em;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      border-bottom: 1px solid #eeeeee;
      margin: 0;
      padding: 5px 5px 5px;
      display: flex;
      :last-of-type {
        border-bottom: none;
      }
    }
  }
`;
