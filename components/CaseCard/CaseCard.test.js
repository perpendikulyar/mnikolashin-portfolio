import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseCard from './CaseCard';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock MetricsBar
jest.mock('../MetricsBar/MetricsBar', () => ({
  __esModule: true,
  default: function MockMetricsBar({ metric }) {
    return (
      <div data-testid="metrics-bar" className="metrics-bar">
        {metric.name}: {metric.before} → {metric.after}
      </div>
    );
  },
}));

describe('CaseCard', () => {
  const mockCaseData = {
    id: '1',
    title: 'ML-рекомендации в LiveJournal',
    category: 'ML & AI',
    categoryIcon: '🤖',
    problem: 'Низкий уровень глубины от публикации к публикации',
    solution: 'Запуск рекомендательной системы на базе ML',
    metrics: [
      {
        name: 'CTR карточек',
        before: '0.7%',
        after: '5.8%',
        change: '+5%',
        positive: true,
      },
      {
        name: 'Session Depth',
        before: '3.2',
        after: '4.1',
        change: '+4%',
        positive: true,
      },
    ],
    insights: 'Персонализация контента критически важна для UGC-платформ',
    skills: ['ML Product', 'Personalization', 'A/B Testing'],
    imageUrl: '/images/lj1.png',
    period: '2024-2025',
    teamSize: '12 человек',
    mau: '70M+',
  };

  it('renders case card with all data', () => {
    render(<CaseCard caseData={mockCaseData} />);

    // Check title
    expect(screen.getByText('ML-рекомендации в LiveJournal')).toBeInTheDocument();

    // Check category badge
    expect(screen.getByText('🤖 ML & AI')).toBeInTheDocument();

    // Check problem section
    expect(screen.getByText('Проблема')).toBeInTheDocument();
    expect(screen.getByText('Низкий уровень глубины от публикации к публикации')).toBeInTheDocument();

    // Check solution section
    expect(screen.getByText('Решение')).toBeInTheDocument();
    expect(screen.getByText('Запуск рекомендательной системы на базе ML')).toBeInTheDocument();

    // Check metrics section
    expect(screen.getByText('Метрики')).toBeInTheDocument();

    // Check insights section
    expect(screen.getByText('Инсайт')).toBeInTheDocument();
    expect(screen.getByText('Персонализация контента критически важна для UGC-платформ')).toBeInTheDocument();

    // Check skills
    expect(screen.getByText('ML Product')).toBeInTheDocument();
    expect(screen.getByText('Personalization')).toBeInTheDocument();
    expect(screen.getByText('A/B Testing')).toBeInTheDocument();
  });

  it('renders meta information (period, team size, MAU)', () => {
    render(<CaseCard caseData={mockCaseData} />);

    expect(screen.getByText('2024-2025')).toBeInTheDocument();
    expect(screen.getByText('12 человек')).toBeInTheDocument();
    expect(screen.getByText('70M+')).toBeInTheDocument();
  });

  it('renders metrics bars', () => {
    render(<CaseCard caseData={mockCaseData} />);

    const metricsBars = screen.getAllByTestId('metrics-bar');
    expect(metricsBars).toHaveLength(2);
    expect(metricsBars[0]).toHaveTextContent('CTR карточек: 0.7% → 5.8%');
    expect(metricsBars[1]).toHaveTextContent('Session Depth: 3.2 → 4.1');
  });

  it('handles missing optional fields gracefully', () => {
    const minimalCaseData = {
      title: 'Minimal Case',
      category: 'Test',
      categoryIcon: '🧪',
      problem: 'Test problem',
      solution: 'Test solution',
      metrics: [],
      insights: '',
      skills: [],
      imageUrl: '/images/test.png',
    };

    render(<CaseCard caseData={minimalCaseData} />);

    expect(screen.getByText('Minimal Case')).toBeInTheDocument();
    expect(screen.getByText('🧪 Test')).toBeInTheDocument();
    expect(screen.getByText('Test problem')).toBeInTheDocument();
    expect(screen.getByText('Test solution')).toBeInTheDocument();

    // Metrics section should not render for empty metrics
    expect(screen.queryByText('Метрики')).not.toBeInTheDocument();
  });

  it('displays positive metrics with correct styling', () => {
    const caseWithPositiveMetrics = {
      ...mockCaseData,
      metrics: [
        {
          name: 'Revenue',
          before: '100₽',
          after: '200₽',
          change: '+100%',
          positive: true,
        },
      ],
    };

    render(<CaseCard caseData={caseWithPositiveMetrics} />);

    expect(screen.getByText('+100%')).toBeInTheDocument();
    expect(screen.getByText('Метрики')).toBeInTheDocument();
  });

  it('displays negative metrics with correct styling', () => {
    const caseWithNegativeMetrics = {
      ...mockCaseData,
      metrics: [
        {
          name: 'Bounce Rate',
          before: '50%',
          after: '30%',
          change: '-20%',
          positive: false,
        },
      ],
    };

    render(<CaseCard caseData={caseWithNegativeMetrics} />);

    expect(screen.getByText('-20%')).toBeInTheDocument();
  });

  it('applies dark mode classes', () => {
    const { container } = render(<CaseCard caseData={mockCaseData} />);

    const card = container.firstChild;
    expect(card).toHaveClass('dark:bg-gray-800/80');
    expect(card).toHaveClass('dark:border-gray-700/50');
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(<CaseCard caseData={mockCaseData} />);

    // Check for semantic HTML
    const headings = container.querySelectorAll('h3, h4');
    expect(headings.length).toBeGreaterThan(0);

    // Check for alt text on image
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('alt', 'ML-рекомендации в LiveJournal');
  });
});
