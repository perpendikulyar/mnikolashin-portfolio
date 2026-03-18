// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme() {
    return {
      theme: 'dark',
      setTheme: jest.fn(),
      resolvedTheme: 'dark',
      themes: ['light', 'dark'],
    };
  },
  ThemeProvider: ({ children }) => <>{children}</>,
}));

// Mock GSAP
jest.mock('gsap', () => ({
  fromTo: jest.fn(),
  to: jest.fn(),
  from: jest.fn(),
  set: jest.fn(),
  context: jest.fn(() => ({
    add: jest.fn(),
    revert: jest.fn(),
  })),
  Power3: {
    easeOut: 'power3.out',
  },
}));

// Suppress console errors during tests (optional)
const originalError = console.error;
console.error = (...args) => {
  // Suppress specific warnings that are not relevant for tests
  if (
    args[0]?.includes?.('Warning: ReactDOM.render is no longer supported') ||
    args[0]?.includes?.('Warning: unmountComponentAtNode is no longer supported')
  ) {
    return;
  }
  originalError.call(console, ...args);
};
