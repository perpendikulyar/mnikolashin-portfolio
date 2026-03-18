import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsSection from './SkillsSection';

describe('SkillsSection', () => {
  const mockSkills = {
    product: [
      { name: 'Product Strategy', level: 95 },
      { name: 'Roadmapping', level: 90 },
      { name: 'OKR / KPI', level: 90 },
    ],
    technical: [
      { name: 'SQL', level: 80 },
      { name: 'Python (Data)', level: 70 },
    ],
    design: [
      { name: 'UX/UI Design', level: 85 },
      { name: 'Figma', level: 75 },
    ],
    growth: [
      { name: 'Growth Hacking', level: 85 },
      { name: 'Retention', level: 90 },
    ],
  };

  it('renders all four skill categories', () => {
    render(<SkillsSection skills={mockSkills} />);

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Technical')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
  });

  it('renders Product category skills correctly', () => {
    render(<SkillsSection skills={mockSkills} />);

    expect(screen.getByText('Product Strategy')).toBeInTheDocument();
    expect(screen.getByText('Roadmapping')).toBeInTheDocument();
    expect(screen.getByText('OKR / KPI')).toBeInTheDocument();

    expect(screen.getByText('95%')).toBeInTheDocument();
    expect(screen.getByText('90%')).toBeInTheDocument();
  });

  it('renders Technical category skills correctly', () => {
    render(<SkillsSection skills={mockSkills} />);

    expect(screen.getByText('SQL')).toBeInTheDocument();
    expect(screen.getByText('Python (Data)')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(screen.getByText('70%')).toBeInTheDocument();
  });

  it('renders Design category skills correctly', () => {
    render(<SkillsSection skills={mockSkills} />);

    expect(screen.getByText('UX/UI Design')).toBeInTheDocument();
    expect(screen.getByText('Figma')).toBeInTheDocument();
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders Growth category skills correctly', () => {
    render(<SkillsSection skills={mockSkills} />);

    expect(screen.getByText('Growth Hacking')).toBeInTheDocument();
    expect(screen.getByText('Retention')).toBeInTheDocument();
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('90%')).toBeInTheDocument();
  });

  it('renders skill bars with correct widths', () => {
    const { container } = render(<SkillsSection skills={mockSkills} />);

    const skillBars = container.querySelectorAll('.bg-gradient-to-r.from-purple-500.to-pink-500');
    expect(skillBars.length).toBeGreaterThan(0);

    // Check that the first skill bar (Product Strategy - 95%) has correct width
    expect(skillBars[0]).toHaveStyle('width: 95%');
  });

  it('applies correct category colors', () => {
    const { container } = render(<SkillsSection skills={mockSkills} />);

    // Product - blue to cyan
    expect(container.querySelector('.from-blue-500.to-cyan-500')).toBeInTheDocument();

    // Technical - green to emerald
    expect(container.querySelector('.from-green-500.to-emerald-500')).toBeInTheDocument();

    // Design - purple to pink
    expect(container.querySelector('.from-purple-500.to-pink-500')).toBeInTheDocument();

    // Growth - orange to red
    expect(container.querySelector('.from-orange-500.to-red-500')).toBeInTheDocument();
  });

  it('renders category icons', () => {
    const { container } = render(<SkillsSection skills={mockSkills} />);

    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThanOrEqual(4); // At least one per category
  });

  it('applies dark mode classes', () => {
    const { container } = render(<SkillsSection skills={mockSkills} />);

    expect(container.querySelector('.dark:bg-gray-900')).toBeInTheDocument();
    expect(container.querySelector('.dark:border-gray-800')).toBeInTheDocument();
    expect(container.querySelector('.dark:text-gray-300')).toBeInTheDocument();
    expect(container.querySelector('.dark:text-gray-400')).toBeInTheDocument();
    expect(container.querySelector('.dark:text-white')).toBeInTheDocument();
    expect(container.querySelector('.dark:bg-gray-700')).toBeInTheDocument();
  });

  it('handles empty skill categories gracefully', () => {
    const emptySkills = {
      product: [],
      technical: [],
      design: [],
      growth: [],
    };

    render(<SkillsSection skills={emptySkills} />);

    // Categories should still render
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Technical')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
  });

  it('handles missing skill categories gracefully', () => {
    const partialSkills = {
      product: mockSkills.product,
      technical: mockSkills.technical,
    };

    render(<SkillsSection skills={partialSkills} />);

    // All categories should render, but some may be empty
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Technical')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
  });

  it('has proper responsive grid layout', () => {
    const { container } = render(<SkillsSection skills={mockSkills} />);

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(<SkillsSection skills={mockSkills} />);

    // Check for semantic headings
    const headings = container.querySelectorAll('h3');
    expect(headings.length).toBe(4); // One per category

    // Check that skill names are readable
    expect(screen.getByText('Product Strategy')).toBeInTheDocument();
  });

  it('renders skill cards with proper styling', () => {
    const { container } = render(<SkillsSection skills={mockSkills} />);

    const cards = container.querySelectorAll('.bg-white.dark\\:bg-gray-900');
    expect(cards.length).toBe(4); // One per category

    cards.forEach((card) => {
      expect(card).toHaveClass('rounded-xl');
      expect(card).toHaveClass('p-6');
      expect(card).toHaveClass('shadow-lg');
    });
  });
});
