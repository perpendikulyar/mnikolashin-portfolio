import React from "react";

/**
 * SkillBar - Прогресс бар навыка
 */
const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

/**
 * SkillsSection - Секция навыков с категориями
 */
const SkillsSection = ({ skills }) => {
  const { product, technical, design, growth } = skills;

  const categories = [
    {
      id: "product",
      name: "Product",
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
      color: "from-blue-500 to-cyan-500",
      skills: product,
    },
    {
      id: "technical",
      name: "Technical",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      skills: technical,
    },
    {
      id: "design",
      name: "Design",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      skills: design,
    },
    {
      id: "growth",
      name: "Growth",
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
      color: "from-orange-500 to-red-500",
      skills: growth,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
        >
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-2 rounded-lg bg-linear-to-br ${category.color} text-white`}
            >
              {category.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {category.name}
            </h3>
          </div>

          {/* Skills */}
          <div>
            {category.skills &&
              category.skills.map((skill, idx) => (
                <SkillBar key={idx} name={skill.name} level={skill.level} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
