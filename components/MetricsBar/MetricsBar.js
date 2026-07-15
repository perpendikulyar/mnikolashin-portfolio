import React from "react";

/**
 * MetricsBar - Визуализация метрик до/после
 * @param {Object} metric - Объект метрики с полями: name, before, after, change, positive
 */
const MetricsBar = ({ metric }) => {
  const { name, before, after, change, positive } = metric;

  // Парсим значения для вычисления пропорций
  const parseValue = (val) => {
    if (!val) return 0;
    const num = parseFloat(
      val.replace("%", "").replace("₽", "").replace(" ", "")
    );
    return isNaN(num) ? 0 : num;
  };

  const beforeVal = parseValue(before);
  const afterVal = parseValue(after);
  const maxValue = Math.max(beforeVal, afterVal, 1);

  const beforeWidth = beforeVal > 0 ? (beforeVal / maxValue) * 100 : 10;
  const afterWidth = afterVal > 0 ? (afterVal / maxValue) * 100 : 10;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span
          className={`text-sm font-bold ${
            positive
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {change}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Before */}
        <div className="flex-1">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            До
          </div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
            <div
              className="h-full bg-gray-400 dark:bg-gray-500 transition-all duration-500"
              style={{ width: `${beforeWidth}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">
            {before}
          </div>
        </div>

        {/* Arrow */}
        <div className="shrink-0 pt-4">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>

        {/* After */}
        <div className="flex-1">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            После
          </div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                positive
                  ? "bg-linear-to-r from-green-400 to-green-500"
                  : "bg-linear-to-r from-red-400 to-red-500"
              }`}
              style={{ width: `${afterWidth}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">
            {after}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsBar;
