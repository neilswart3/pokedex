import { BaseComponentProps } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export interface CardProps extends PropsWithChildren, BaseComponentProps {}

export const Card: React.FC<CardProps> = ({
  as: Tag = 'div',
  children,
  className,
  ...props
}) => {
  return (
    <Tag
      {...props}
      className={classNames(
        'Card',
        'flex flex-col relative shadow-md',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
