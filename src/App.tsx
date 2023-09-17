import { Theme, ThemeProvider } from '@emotion/react';
import { AppLayout } from '@components/AppLayout';
import { MainPage } from '@pages/MainPage';
import { theme } from '@theme/index';

const App = () => {
  return (
    <ThemeProvider theme={theme as Theme}>
      <AppLayout>
        <MainPage />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
