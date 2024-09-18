import { BaseComponentProps } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface Props extends BaseComponentProps, PropsWithChildren {}

export const IconButton: React.FC<Props> = ({
  as: Tag = 'button',
  className,
  children,
  ...props
}) => (
  <Tag className={classNames('p-2 w-12 h-12', className)} {...props}>
    {children}
  </Tag>
);
