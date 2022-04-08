import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      link: string;
    };
    page: {
      background: string;
    };
  }
}
