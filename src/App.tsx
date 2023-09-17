import { AppLayout } from '@components/AppLayout';
import { ThemeProvider } from '@emotion/react';
import { MainPage } from '@pages/MainPage';
import { theme } from '@theme/index';
import { Theme } from '@emotion/react';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme as Theme}>
        <AppLayout>
          <MainPage />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
