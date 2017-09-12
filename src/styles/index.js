// ----- styles/index.js
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  .Rejection--width2 {
    max-width: 800px;
  }
`;
