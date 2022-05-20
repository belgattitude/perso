/**
 * This mock is useful if you're relying on https://react-svgr.com/.
 *
 * @link {https://react-svgr.com/docs/jest/|SVGR Jest doc}
 * @link {https://github.com/gregberge/svgr/issues/83#issuecomment-785996587|Config that actually works}
 */

import type { SVGProps } from 'react';
import React from 'react';

const ReactSvgrMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <svg ref={ref} {...props} />
);

ReactSvgrMock.displayName = 'SvgrMock';

export const ReactComponent = ReactSvgrMock;
export default ReactSvgrMock;
