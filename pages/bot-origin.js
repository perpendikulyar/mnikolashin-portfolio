import AppHead from "../components/AppHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Image from "next/image";

// Bot Pricing Data
const botPlans = [
  {
    id: "basic",
    title: "Базовый бот",
    price: "от 10 000 ₽",
    description: "Идеально для старта. Быстрая реализация основных функций.",
    features: [
      "Выполнение определенных сценариев",
      "Заполнение форм клиентами",
      "Простая база данных",
      "Мониторинг и админские функции",
      "Интеграция с Telegram API",
      "Документация по боту",
    ],
    recommended: false,
  },
  {
    id: "advanced",
    title: "Продвинутый бот",
    price: "от 50 000 ₽",
    description:
      "Для серьезного бизнеса. Расширенные возможности персонализации.",
    features: [
      "Сложная база данных и сегментация",
      "Персонализация для каждого пользователя",
      "Подключение платежных систем (ЮKassa, Robokassa, Stripe)",
      "Система кэширования и оптимизации",
      "Дашборд для аналитики",
      "Приоритетная поддержка",
      "Интеграция с 1С и CRM системами",
    ],
    recommended: true,
  },
  {
    id: "custom",
    title: "Кастомный бот",
    price: "от 150 000 ₽",
    description: "Уникальное решение под ваши бизнес-процессы.",
    features: [
      "Разработка с нуля под заявку",
      "Сложная логика и сценарии",
      "Интеграция с вашими системами",
      "Гибкая система ролей и прав",
      "Масштабируемая архитектура",
      "SLA и гарантии",
      "Постоянная поддержка и развитие",
    ],
    recommended: false,
  },
];

// AI Features Data
const aiFeatures = [
  {
    id: 1,
    title: "ИИ-ассистент",
    description:
      "Интеграция с современными LLM моделями для создания умного ассистента.",
    icon: "🧠",
  },
  {
    id: 2,
    title: "Анализ данных",
    description:
      "Автоматический анализ поведения пользователей и генерация инсайтов.",
    icon: "📊",
  },
  {
    id: 3,
    title: "Генерация контента",
    description:
      "ИИ для создания текстов, описаний и рекомендаций в реальном времени.",
    icon: "✍️",
  },
  {
    id: 4,
    title: "Персонализация",
    description: "Умная система рекомендаций и персонализированных сообщений.",
    icon: "🎯",
  },
];

export default function BotOrigin() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pageParams = {
    title: "Создание Telegram и Max ботов | Автоматизация бизнеса",
    description:
      "Создаем Telegram и Max ботов для автоматизации бизнеса: базовые, продвинутые и кастомные решения. Быстрый запуск менее 24 часов.",
    keywords:
      "бот телеграм, бот макс, чат бот, автоматизация бизнеса, telegram bot, max bot, создание бота",
    openGraph: {
      title: "Создание Telegram и Max ботов | Автоматизация бизнеса",
      description:
        "Создаем Telegram и Max ботов для автоматизации бизнеса: базовые, продвинутые и кастомные решения.",
    },
    pagePath: "/bot-origin/",
  };

  return (
    <>
      <AppHead {...pageParams} />
      <div className="min-h-screen bg-sabbia-bianca dark:bg-marina-notte">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 laptop:py-24">
          <div className="flex flex-col laptop:flex-row items-center gap-12 laptop:gap-20">
            <div className="flex-1 text-center laptop:text-left">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                <span className="text-blue-700 dark:text-blue-300 font-medium">
                  🤖 Автоматизация вашего бизнеса
                </span>
              </div>
              <h1 className="text-4xl laptop:text-6xl font-bold mb-6 leading-tight">
                Создаем Telegram и Max ботов для вашего бизнеса
              </h1>
              <p className="text-xl laptop:text-2xl opacity-80 mb-8">
                Автоматизируйте коммуникацию с клиентами, увеличьте продажи и
                сэкономьте время на рутинных задачах
              </p>
              <div className="flex flex-col laptop:flex-row gap-4 justify-center laptop:justify-start">
                <Button
                  type="primary"
                  className="px-8 py-4 text-lg"
                  onClick={() => scrollToSection("pricing")}
                >
                  Выбрать тариф
                </Button>
                <Button
                  type="secondary"
                  className="px-8 py-4 text-lg"
                  onClick={() => scrollToSection("features")}
                >
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10">
                <Image
                  src="/images/bot-hero.png"
                  alt="Telegram Bot Interface"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="container mx-auto px-4 py-16 laptop:py-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl laptop:text-5xl font-bold mb-6">
              Почему выбирают нас?
            </h2>
            <p className="text-xl opacity-80">
              Мы создаем ботов, которые решают реальные бизнес-задачи и приносят
              ощутимый результат
            </p>
          </div>

          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8">
            {[
              {
                title: "⚡ Быстрый запуск",
                description: "От идеи до рабочего бота менее чем за 24 часа",
                icon: "🚀",
              },
              {
                title: "📊 Аналитика",
                description: "Полная аналитика поведения пользователей",
                icon: "📈",
              },
              {
                title: "🔒 Надежность",
                description: "99.9% uptime и гарантированная поддержка",
                icon: "🛡️",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div
          id="pricing"
          className="container mx-auto px-4 py-16 laptop:py-24 bg-gray-50 dark:bg-slate-700/30 rounded-3xl my-12"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl laptop:text-5xl font-bold mb-6">
              Тарифные планы
            </h2>
            <p className="text-xl opacity-80">
              Выберите подходящий вариант или обсудите индивидуальное решение
            </p>
          </div>

          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {botPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl ${
                  plan.recommended
                    ? "bg-linear-to-br from-blue-500 to-purple-600 text-white scale-105 shadow-2xl"
                    : "bg-white dark:bg-slate-800"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-yellow-400 text-yellow-900 font-bold rounded-full">
                    Рекомендуем
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p
                  className={`mb-6 ${
                    plan.recommended ? "opacity-90" : "opacity-80"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span
                        className={
                          plan.recommended ? "opacity-90" : "opacity-80"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  type={plan.recommended ? "primary" : "secondary"}
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Обсудить проект
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Features Section */}
        <div
          id="ai-features"
          className="container mx-auto px-4 py-16 laptop:py-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl laptop:text-5xl font-bold mb-6">
              Возможности ИИ
            </h2>
            <p className="text-xl opacity-80">
              Интеграция современных AI-технологий для создания умных ботов
            </p>
          </div>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
            {aiFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg"
              >
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="container mx-auto px-4 py-16 laptop:py-24">
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 laptop:p-12 shadow-2xl">
            <h2 className="text-3xl laptop:text-5xl font-bold mb-6 text-center">
              Готовы начать?
            </h2>
            <p className="text-center text-xl opacity-80 mb-8">
              Оставьте заявку и мы свяжемся с вами в течение 24 часов
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 border-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Telegram</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 border-none focus:ring-2 focus:ring-blue-500"
                    placeholder="@username"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Описание проекта
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 border-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Кратко опишите вашу идею"
                ></textarea>
              </div>
              <Button type="primary" className="w-full py-4 text-lg">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
