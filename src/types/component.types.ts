import { ElementType, HTMLAttributes, ReactHTML } from 'react';

export interface BaseComponentProps extends HTMLAttributes<HTMLElement> {
  as?: keyof ReactHTML | ElementType;
  className?: string;
}
