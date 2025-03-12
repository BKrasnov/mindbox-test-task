import { FC, ReactNode } from 'react';
import { AppHeader } from './AppHeader';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <>
    <AppHeader />
    <main>{children}</main>
  </>
);
