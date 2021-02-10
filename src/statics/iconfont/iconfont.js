import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('.\iconfont.eot?t=1610774799651'); /* IE9 */
  src: url('.\iconfont.eot?t=1610774799651#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('.\iconfont.woff?t=1610774799651') format('woff'),
  url('.\iconfont.ttf?t=1610774799651') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('.\iconfont.svg?t=1610774799651#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 22px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconshang:before {
    content: "\\e606";
  }

  .icon44:before {
    content: "\\e6a6";
  }

  .iconzhinanzhen:before {
    content: "\\e646";
  }

  .iconspin:before {
    content: "\\e851";
  }

  .iconAa:before {
    content: "\\e636";
  }

  .iconfangdajing:before {
    content: "\\e610";
  }

  .iconPensyumaobi:before {
    content: "\\e708";
  }
`;
