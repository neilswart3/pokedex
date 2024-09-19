import { BaseComponentProps } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface Props extends BaseComponentProps, PropsWithChildren {
  shadow?: boolean;
  round?: boolean;
}

export const IconButton: React.FC<Props> = ({
  as: Tag = 'button',
  className,
  children,
  shadow = false,
  round = false,
  ...props
}) => (
  <Tag
    className={classNames(
      'p-2 w-12 h-12',
      shadow && 'shadow-md',
      round && 'rounded-full',
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);
