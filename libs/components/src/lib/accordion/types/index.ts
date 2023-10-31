import { ReactNode } from 'react';

export interface AccordionProps {
  id?: string;
  className?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  content?: () => ReactNode;
  expanded?: boolean;
  customContent?: () => ReactNode;
  divider?: AccordionDivider;
  borderRadius?: boolean;
  onExpand?: (e: boolean, i: string) => void;
}

export type AccordionDivider = 'none' | 'both' | 'bottom';
