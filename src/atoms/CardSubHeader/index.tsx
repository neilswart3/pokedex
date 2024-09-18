import { BaseComponentProps } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface Props extends BaseComponentProps, PropsWithChildren {}

export const CardSubHeader: React.FC<Props> = ({
  as: Tag = 'h6',
  children,
  className,
}) => <Tag className={classNames('CardSubHeader', className)}>{children}</Tag>;

export default CardSubHeader;
