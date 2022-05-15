import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/app/utils/ThemeProvider';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story, context) => (
    <HashRouter>
      <ThemeProvider
        theme={context.globals.theme}
        style={{
          background: 'var(--t-color-background)',
          height: '100vh',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
        }}
      >
        <Story />
      </ThemeProvider>
    </HashRouter>
  ),
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
