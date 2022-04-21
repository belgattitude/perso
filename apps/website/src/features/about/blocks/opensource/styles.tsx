import styled from '@emotion/styled';

export const OpensourceCtn = styled.div`
  align-items: stretch;
  > div {
    max-width: 500px;
    margin-top: 30px;
  }
  > h1 {
    i {
      font-size: 2em;
    }

    a,
    a:visited {
      transition: all 0.2s ease-in-out;
      //color: ${(props) => props.theme.colors.primary};
      color: #999;
      text-decoration: none;
    }
    a:hover {
      color: ${(props) => props.theme.colors.link};
    }
  }
  > p {
  }
`;
