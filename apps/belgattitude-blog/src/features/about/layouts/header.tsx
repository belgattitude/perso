import styled from '@emotion/styled';
import React from 'react';

const UnstyledHeader: React.FC<{
  className?: string;
}> = (props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export const Header = styled(UnstyledHeader)`
  display: flex;
  flex-direction: row;
  color: white;
  background-color: deeppink;
  position: static;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  height: 2.4em;
  line-height: 2.4em;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  padding: 10px;
  justify-content: center;
  align-items: center;
  a,
  a:visited {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
