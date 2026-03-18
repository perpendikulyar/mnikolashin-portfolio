import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

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
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
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
      mounted: true,
    };
  },
  ThemeProvider: ({ children }) => <>{children}</>,
}));

// Mock portfolio data
jest.mock('../../data/portfolio.json', () => ({
  name: 'Михаил Николашин',
  showBlog: false,
  showResume: true,
  darkMode: true,
}));

describe('Header', () => {
  const defaultProps = {
    handleWorkScroll: jest.fn(),
    handleCreativeScroll: jest.fn(),
    handleBadmintintonScroll: jest.fn(),
    handleCasesScroll: jest.fn(),
    handleSkillsScroll: jest.fn(),
    handleAboutScroll: jest.fn(),
    handleEduScroll: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders header with name', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText('Михаил Николашин')).toBeInTheDocument();
  });

  it('renders navigation buttons for main page', () => {
    render(<Header {...defaultProps} isBlog={false} />);

    expect(screen.getByText('Проекты')).toBeInTheDocument();
    expect(screen.getByText('Подкасты и музыка')).toBeInTheDocument();
    expect(screen.getByText('Бадминтон')).toBeInTheDocument();
    expect(screen.getByText('Написать')).toBeInTheDocument();
  });

  it('renders Resume button when showResume is true', () => {
    render(<Header {...defaultProps} isBlog={false} />);

    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  it('does not render Blog button when showBlog is false', () => {
    render(<Header {...defaultProps} isBlog={false} />);

    expect(screen.queryByText('Blog')).not.toBeInTheDocument();
  });

  it('calls handleWorkScroll when Projects button is clicked', () => {
    const handleWorkScroll = jest.fn();
    render(<Header {...defaultProps} handleWorkScroll={handleWorkScroll} />);

    const projectsButton = screen.getByText('Проекты');
    fireEvent.click(projectsButton);

    expect(handleWorkScroll).toHaveBeenCalled();
  });

  it('calls handleCreativeScroll when Podcasts button is clicked', () => {
    const handleCreativeScroll = jest.fn();
    render(<Header {...defaultProps} handleCreativeScroll={handleCreativeScroll} />);

    const podcastButton = screen.getByText('Подкасты и музыка');
    fireEvent.click(podcastButton);

    expect(handleCreativeScroll).toHaveBeenCalled();
  });

  it('calls handleBadmintintonScroll when Badminton button is clicked', () => {
    const handleBadmintintonScroll = jest.fn();
    render(<Header {...defaultProps} handleBadmintintonScroll={handleBadmintintonScroll} />);

    const badmintonButton = screen.getByText('Бадминтон');
    fireEvent.click(badmintonButton);

    expect(handleBadmintintonScroll).toHaveBeenCalled();
  });

  it('opens email when Contact button is clicked', () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<Header {...defaultProps} />);

    const contactButton = screen.getByText('Написать');
    fireEvent.click(contactButton);

    expect(window.open).toHaveBeenCalledWith('mailto:perpendikulyar@gmail.com');

    window.open = originalOpen;
  });

  it('renders theme toggle button in dark mode', () => {
    render(<Header {...defaultProps} />);

    // Check for moon icon (dark mode)
    const moonIcon = screen.getByAltText('icon');
    expect(moonIcon).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<Header {...defaultProps} />);

    // Mobile menu button should be present (hidden on desktop)
    const menuIcons = screen.getAllByAltText('icon');
    expect(menuIcons.length).toBeGreaterThan(0);
  });

  it('renders blog navigation when isBlog is true', () => {
    render(<Header {...defaultProps} isBlog={true} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('applies dark mode background classes', () => {
    const { container } = render(<Header {...defaultProps} />);

    // Desktop header should have dark mode classes
    expect(container.querySelector('.dark')).toBeInTheDocument();
  });

  it('has proper responsive layout', () => {
    const { container } = render(<Header {...defaultProps} />);

    // Mobile popover
    expect(container.querySelector('.tablet\\:hidden')).toBeInTheDocument();

    // Desktop header
    expect(container.querySelector('.hidden.tablet\\:flex')).toBeInTheDocument();
  });

  it('renders Resume button that opens email', () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<Header {...defaultProps} />);

    const resumeButton = screen.getByText('Resume');
    fireEvent.click(resumeButton);

    expect(window.open).toHaveBeenCalledWith('mailto:perpendikulyar@gmail.com');

    window.open = originalOpen;
  });

  it('does not render hidden navigation items', () => {
    render(<Header {...defaultProps} />);

    // These are commented out in the code
    expect(screen.queryByText('Кейсы')).not.toBeInTheDocument();
    expect(screen.queryByText('Навыки')).not.toBeInTheDocument();
    expect(screen.queryByText('Консалтинг')).not.toBeInTheDocument();
  });

  it('has accessible navigation structure', () => {
    const { container } = render(<Header {...defaultProps} />);

    // Check for button elements
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);

    // Check for proper heading
    const heading = container.querySelector('h1');
    expect(heading).toBeInTheDocument();
  });
});
