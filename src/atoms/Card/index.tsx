import { BaseComponentProps } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export interface CardProps extends PropsWithChildren, BaseComponentProps {
  rounded?: boolean;
}

export const Card: React.FC<CardProps> = ({
  as: Tag = 'div',
  children,
  className,
  rounded = false,
  ...props
}) => (
  <Tag
    {...props}
    className={classNames(
      'Card',
      'flex flex-col relative shadow-md',
      rounded && 'rounded-3xl',
      className,
    )}
  >
    {children}
  </Tag>
);
