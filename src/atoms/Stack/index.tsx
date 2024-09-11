import { BaseComponentProps } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export interface StackProps extends BaseComponentProps, PropsWithChildren {
  flow?: 'row' | 'col';
  reverse?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  as: Tag = 'div',
  children,
  className,
  flow = 'col',
  reverse = false,
}) => (
  <Tag
    className={classNames(
      'Stack',
      'flex',
      `flex-${flow}${reverse ? '-reverse' : ''}`,
      className,
    )}
  >
    {children}
  </Tag>
);
