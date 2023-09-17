import '@emotion/react';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;  
    };
    fontSize: {
      xl: string;
      l: string;
      m: string;
    };
  }

  export type PartialTheme = DeepPartial<Theme>;
}
