import { AppLayout } from '@components/AppLayout';
import { ThemeProvider } from '@emotion/react';
import { MainPage } from '@pages/MainPage';
import { theme } from '@theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <MainPage />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
