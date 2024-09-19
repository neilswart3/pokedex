export type CardColorsItem = {
  [key in 'main' | 'light']: {
    root: string;
    before: string;
    after: string;
  };
};
