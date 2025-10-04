import { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted';
  clickable?: boolean;
  onClick?: () => void;
}