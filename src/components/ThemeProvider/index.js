import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import * as defaultTheme from './theme';

export const GlobalStylesScope = styled.div`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f5f7;
    ${({ theme }) => theme.font};
  }

  /** NOTICES STYLES
   * If you want to change styles you need to update styles for Notices in Notices component too.
   * place for update styles: common-frontend/src/containers/Notices/notices.css
   */
  /** @TODO: try to resolve this issue with CSS
   *  We have a problem with resolve webpack css loader when we try to import then in Notices and install package as deps
   */
  .notices-enter {
    opacity: 0.01;
    margin-bottom: 0;
  }
  .notices-enter-active {
    opacity: 1;
    transition: 300ms all;
    height: auto;
  }
  .notices-exit {
    opacity: 1;
    height: auto;
  }
  .notices-exit-active {
    opacity: 0.01;
    transition: 300ms all;
    transform: translateX(300px);
    margin-bottom: 0;
  }
`;

const ThemeAndScopedStylesProvider = ({ theme = {}, children, ...props }) => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      ...theme,
      color: {
        ...defaultTheme.color,
        ...theme.color,
      },
    }}
  >
    <GlobalStylesScope {...props}>{children}</GlobalStylesScope>
  </ThemeProvider>
);

ThemeAndScopedStylesProvider.defaultProps = {
  theme: defaultTheme,
};

export default ThemeAndScopedStylesProvider;
