import styled from '@emotion/styled';

export const RepoItemCtn = styled.div`
  display: flex;
  margin: 0;
  padding: 5px 5px;
  width: 100%;
  text-align: left;
  div {
    :first-of-type {
      flex: 1 1 100%;
    }
    // The stargazers
    :last-child {
      float: right;
      right: 0;
      display: flex;
      font-size: 0.8em;
      color: #777;
      text-align: right;
      i {
        margin: 2px;
        color: inherit;
      }
    }
  }
  a,
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    padding: 0;
    font-size: 1em;
    font-weight: 400;
    i {
      font-size: inherit;
      color: #444;
      text-align: start;
      margin-left: 5px;
      opacity: 0.3;
      transition: opacity 0.4s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  p {
    color: #444;
    font-size: 0.8em;
    font-weight: lighter;
    padding: 0;
    margin: 5px 0;
  }
  i {
    color: #444;
  }
`;
