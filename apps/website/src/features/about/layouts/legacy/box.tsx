/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: white;
  padding: 1em;
  line-height: 1.65em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const BoxTitle = styled.div`
  margin: 5px 0px 2px 0px;
  padding: 0;
  display: inline-block;
  line-height: 1em;
  i {
    display: block;
    font-size: 2.5em;
    color: #333;
    padding: 5px;
    margin-bottom: 10px;
  }
  h2 {
    color: #444;
    font-weight: 500;
    font-size: 1em;
    margin: 0;
    padding: 5px 5px 5px 0px;
    display: inline-block;
  }
  h3 {
    color: #444;
    font-weight: 500;
    font-size: 0.9em;
    margin: 0;
    padding: 5px 5px 5px 0px;
    display: inline-block;
  }
`;

export const BoxContent = styled.div`
  font-weight: 300;
  font-size: 1em;
  margin: 5px 0px 2px 0px;
  padding: 0;
`;
