import { REM_VALUES } from '@/constants';
import { TailwindSpacing } from '@/types';

type GetClassNamesPayload = TailwindSpacing;

export const getSpacingClassNames = (payload: GetClassNamesPayload): string => {
  return Object.entries(payload)
    .reduce((acc: string[], [key, value]) => {
      if (typeof value !== 'number' || !REM_VALUES.includes(value)) return acc;

      return [...acc, `${key}-${value}`];
    }, [])
    .join(' ');
};
