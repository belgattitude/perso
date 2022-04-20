/**
 * An older version of the site
 * @deprecated
 */
import styled from '@emotion/styled';
import { breakpoints } from '@/config';

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 1em;

  grid-template-areas:
        //'header'

    'sidebar'
    'roles'
    'skills'
    'summary'
    'experience'
    'education';

  grid-template-columns: 1fr;
  max-width: 1024px;
  margin: 15px 15px;
  margin-top: 1.5em;
  @media (${breakpoints.large}) {
    margin: 0em auto;
    margin-top: 1.5em;
    padding: 5px;
    grid-template-columns: 4fr 9fr;
    grid-row-start: auto;
    grid-template-areas:
            //'header   header   header'

      'sidebar  roles    roles'
      'sidebar  skills  skills'
      'sidebar  summary  summary'
      'sidebar  experience  experience'
      'sidebar  education  education';
  }
`;

export const SidebarContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-areas:
    'about'
    'contributions';
  grid-template-columns: 1fr;
  @media (${breakpoints.large}) {
    grid-template-areas:
      'about'
      'contributions';
  }
`;

export const GridItem = styled.div<{
  area: string;
}>`
  grid-area: ${(props) => props.area};
`;
