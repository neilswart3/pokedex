import { BaseComponentProps } from '@/types';
import { PropsWithChildren } from 'react';

export interface ButtonProps extends BaseComponentProps, PropsWithChildren {}

export const Button: React.FC<ButtonProps> = ({
  as: Tag = 'button',
  children,
}) => {
  return <Tag className="text-3xl font-bold underline">{children}</Tag>;
};
