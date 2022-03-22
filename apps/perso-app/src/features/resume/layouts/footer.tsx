import styled from '@emotion/styled';
import React from 'react';

type FooterProps = {
  className?: string;
};

const UnstyledFooter: React.FC<FooterProps> = (props) => {
  const { children, className } = props;
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export const Footer = styled(UnstyledFooter)`
  display: flex;
  flex-direction: row;
  color: white;
  background: #0f0c29;
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  position: static;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  margin-top: 5em;
  height: 17em;
  line-height: 1.9em;
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
