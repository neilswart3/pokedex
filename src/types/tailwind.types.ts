import { REM_VALUES } from '@/constants';

export type RemValue = (typeof REM_VALUES)[number];

type TailwindMargin = Partial<{
  m: RemValue;
  mx: RemValue;
  my: RemValue;
  mt: RemValue;
  mr: RemValue;
  mb: RemValue;
  ml: RemValue;
}>;

type TailwindPadding = Partial<{
  p: RemValue;
  px: RemValue;
  py: RemValue;
  pt: RemValue;
  pr: RemValue;
  pb: RemValue;
  pl: RemValue;
}>;

export type TailwindSpacing = TailwindMargin & TailwindPadding;

export type TailwindClassNames = TailwindSpacing;
