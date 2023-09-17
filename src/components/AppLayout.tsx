import { FC, ReactNode } from 'react';
import { AppHeader } from './AppHeader';

interface AppLayoutProps {
  children: ReactNode;
}

/** Компонент макета приложения. */
export const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <>
    <AppHeader />
    <main>{children}</main>
  </>
);
