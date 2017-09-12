// ----- styles/index.js
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    background: #3c3c3c;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    font-size: 12px;
    line-height: 1.4;
  }

  a {
    color: #193549;
    text-decoration-color: #ffc600;
  }

  .Rejection--width2 {
    width: 500px;
  }
`;
