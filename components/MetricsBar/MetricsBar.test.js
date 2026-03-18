import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MetricsBar from './MetricsBar';

describe('MetricsBar', () => {
  const mockMetric = {
    name: 'CTR карточек',
    before: '0.7%',
    after: '5.8%',
    change: '+5%',
    positive: true,
  };

  it('renders metric name and values correctly', () => {
    render(<MetricsBar metric={mockMetric} />);

    expect(screen.getByText('CTR карточек')).toBeInTheDocument();
    expect(screen.getByText('До')).toBeInTheDocument();
    expect(screen.getByText('После')).toBeInTheDocument();
    expect(screen.getByText('0.7%')).toBeInTheDocument();
    expect(screen.getByText('5.8%')).toBeInTheDocument();
    expect(screen.getByText('+5%')).toBeInTheDocument();
  });

  it('applies positive styling for positive metrics', () => {
    const { container } = render(<MetricsBar metric={mockMetric} />);

    const changeElement = screen.getByText('+5%');
    expect(changeElement).toHaveClass('text-green-600');
    expect(changeElement).toHaveClass('dark:text-green-400');

    // Check gradient bar for positive metrics
    const afterBar = container.querySelector('.bg-gradient-to-r.from-green-400.to-green-500');
    expect(afterBar).toBeInTheDocument();
  });

  it('applies negative styling for negative metrics', () => {
    const negativeMetric = {
      name: 'Bounce Rate',
      before: '50%',
      after: '30%',
      change: '-20%',
      positive: false,
    };

    const { container } = render(<MetricsBar metric={negativeMetric} />);

    const changeElement = screen.getByText('-20%');
    expect(changeElement).toHaveClass('text-red-600');
    expect(changeElement).toHaveClass('dark:text-red-400');

    // Check gradient bar for negative metrics
    const afterBar = container.querySelector('.bg-gradient-to-r.from-red-400.to-red-500');
    expect(afterBar).toBeInTheDocument();
  });

  it('calculates bar widths proportionally', () => {
    const metric = {
      name: 'Revenue',
      before: '100',
      after: '200',
      change: '+100',
      positive: true,
    };

    const { container } = render(<MetricsBar metric={metric} />);

    const bars = container.querySelectorAll('.h-full');
    expect(bars.length).toBe(2);

    // Before bar should be 50% width (100/200)
    // After bar should be 100% width (200/200)
    expect(bars[0]).toHaveStyle('width: 50%');
    expect(bars[1]).toHaveStyle('width: 100%');
  });

  it('handles percentage values correctly', () => {
    const metric = {
      name: 'Conversion Rate',
      before: '2.5%',
      after: '7.5%',
      change: '+5%',
      positive: true,
    };

    const { container } = render(<MetricsBar metric={metric} />);

    const bars = container.querySelectorAll('.h-full');
    // Before: 2.5/7.5 = 33.33%
    // After: 7.5/7.5 = 100%
    expect(bars[0]).toHaveStyle('width: 33.33%');
    expect(bars[1]).toHaveStyle('width: 100%');
  });

  it('handles ruble values correctly', () => {
    const metric = {
      name: 'Revenue',
      before: '1000₽',
      after: '5000₽',
      change: '+4000₽',
      positive: true,
    };

    const { container } = render(<MetricsBar metric={metric} />);

    const bars = container.querySelectorAll('.h-full');
    // Before: 1000/5000 = 20%
    // After: 5000/5000 = 100%
    expect(bars[0]).toHaveStyle('width: 20%');
    expect(bars[1]).toHaveStyle('width: 100%');
  });

  it('handles values with spaces correctly', () => {
    const metric = {
      name: 'Users',
      before: '1 000',
      after: '5 000',
      change: '+4 000',
      positive: true,
    };

    const { container } = render(<MetricsBar metric={metric} />);

    const bars = container.querySelectorAll('.h-full');
    expect(bars[0]).toHaveStyle('width: 20%');
    expect(bars[1]).toHaveStyle('width: 100%');
  });

  it('handles zero and null values gracefully', () => {
    const metric = {
      name: 'New Feature',
      before: '0',
      after: '100',
      change: '+100',
      positive: true,
    };

    const { container } = render(<MetricsBar metric={metric} />);

    const bars = container.querySelectorAll('.h-full');
    // Zero should get minimum 10% width
    expect(bars[0]).toHaveStyle('width: 10%');
    expect(bars[1]).toHaveStyle('width: 100%');
  });

  it('handles invalid values gracefully', () => {
    const metric = {
      name: 'Unknown Metric',
      before: 'N/A',
      after: 'N/A',
      change: '0',
      positive: false,
    };

    const { container } = render(<MetricsBar metric={metric} />);

    const bars = container.querySelectorAll('.h-full');
    // Invalid values should get minimum 10% width
    expect(bars[0]).toHaveStyle('width: 10%');
    expect(bars[1]).toHaveStyle('width: 10%');
  });

  it('applies dark mode classes', () => {
    const { container } = render(<MetricsBar metric={mockMetric} />);

    expect(container.querySelector('.dark:text-gray-300')).toBeInTheDocument();
    expect(container.querySelector('.dark:bg-gray-700')).toBeInTheDocument();
    expect(container.querySelector('.dark:text-gray-400')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(<MetricsBar metric={mockMetric} />);

    // Check for semantic structure
    expect(screen.getByText('До')).toBeInTheDocument();
    expect(screen.getByText('После')).toBeInTheDocument();

    // Check that metric name is readable
    expect(screen.getByText('CTR карточек')).toBeInTheDocument();
  });

  it('renders arrow icon between before and after', () => {
    const { container } = render(<MetricsBar metric={mockMetric} />);

    const arrow = container.querySelector('svg');
    expect(arrow).toBeInTheDocument();
  });
});
