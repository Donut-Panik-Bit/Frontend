import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles, theme, ThemeProvider } from './global-styles'
import { LogInProvider } from './shared/context/context';
import { App } from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <LogInProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </LogInProvider>
  </QueryClientProvider>);
