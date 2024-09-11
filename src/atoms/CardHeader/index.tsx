import { BaseComponentProps } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface CardHeaderProps extends BaseComponentProps, PropsWithChildren {}

export const CardHeader: React.FC<CardHeaderProps> = ({
  as: Tag = 'h4',
  children,
  className,
}) => <Tag className={classNames('CardHeader', className)}>{children}</Tag>;
