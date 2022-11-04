import { css } from 'styled-components';

const getBubbleTailStyle = (isMyChat: boolean, isContinual: boolean) => {
  if (!isContinual) {
    if (isMyChat) {
      return css`
        ::before {
          content: '';
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 5px solid #fbe64d;
          border-right: 5px solid transparent;
          border-top: 5px solid #fbe64d;
          border-bottom: 5px solid transparent;
          border-radius: 1px;
          right: -6px;
          top: 6px;
        }
      `;
    } else {
      return css`
        ::before {
          content: '';
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid #fff;
          border-top: 5px solid #fff;
          border-bottom: 5px solid transparent;
          left: -6px;
          top: 6px;
        }
      `;
    }
  }
};

export default getBubbleTailStyle;
