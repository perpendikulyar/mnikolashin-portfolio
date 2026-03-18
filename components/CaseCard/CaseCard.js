import React from "react";
import Image from "next/image";
import MetricsBar from "../MetricsBar/MetricsBar";

/**
 * CaseCard - Карточка кейса с метриками
 * Структура: Проблема → Решение → Метрики → Инсайты
 */
const CaseCard = ({ caseData }) => {
  const {
    title,
    category,
    categoryIcon,
    problem,
    solution,
    metrics,
    insights,
    skills,
    imageUrl,
    period,
    teamSize,
    mau,
  } = caseData;

  return (
    <div className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-200/10 dark:border-gray-700/50">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header with Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/20 dark:border-gray-600/30 text-gray-800 dark:text-gray-100">
            <span>{categoryIcon}</span>
            {category}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta info */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
          {period && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {period}
            </span>
          )}
          {teamSize && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {teamSize}
            </span>
          )}
          {mau && mau !== "N/A" && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              {mau} MAU
            </span>
          )}
        </div>

        {/* Problem */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1 flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Проблема
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-200">{problem}</p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Решение
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-200">{solution}</p>
        </div>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800/70 rounded-lg">
            <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Метрики
            </h4>
            {metrics.map((metric, idx) => (
              <MetricsBar key={idx} metric={metric} />
            ))}
          </div>
        )}

        {/* Insights */}
        {insights && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Инсайт
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-200 italic">
              {insights}
            </p>
          </div>
        )}

        {/* Skills Tags */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium rounded-md bg-purple-500/10 dark:bg-purple-500/20 border border-purple-200/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseCard;
