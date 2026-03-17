import { useRef } from "react";

import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import CaseCard from "../components/CaseCard/CaseCard";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import ResumeDownload from "../components/ResumeDownload/ResumeDownload";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Button from "../components/Button";
import AppHead from "../components/AppHead";

// Local Data
import data from "../data/portfolio.json";
import { generateMetadata } from "../utils/yandex-metrika-tracker/generateMetadata";

export default function Home() {
  // Ref
  const casesRef = useRef();
  const skillsRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const crativeRef = useRef();
  const textZero = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const textFive = useRef();
  const textSix = useRef();
  const textSeven = useRef();
  const textLast = useRef();
  const badminton = useRef();
  const edu = useRef();

  // Handling Scroll
  const handleCasesScroll = () => {
    window.scrollTo({
      top: casesRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSkillsScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCreativeScroll = () => {
    window.scrollTo({
      top: crativeRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleBadmintintonScroll = () => {
    window.scrollTo({
      top: badminton.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleEduScroll = () => {
    window.scrollTo({
      top: edu.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [
        textOne.current,
        textTwo.current,
        textZero.current,
        textThree.current,
        textFour.current,
        textFive.current,
        textSix.current,
        textSeven.current,
        textLast.current,
      ],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <>
      <AppHead />
      <div className="relative">
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>

        <div className="container mx-auto mb-10">
          <Header
            handleCasesScroll={handleCasesScroll}
            handleSkillsScroll={handleSkillsScroll}
            handleWorkScroll={handleWorkScroll}
            handleAboutScroll={handleAboutScroll}
            handleCreativeScroll={handleCreativeScroll}
            handleBadmintintonScroll={handleBadmintintonScroll}
            handleEduScroll={handleEduScroll}
          />
          <div className="laptop:mt-20 mt-10 laptop:mx-20 mx-2">
            <div className="mt-5">
              <h3
                ref={textOne}
                className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h3>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-4xl laptop:text-5xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textZero}
                className="text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineZero}
              </h1>
              <ul className="mt-4 text-lg laptopl:text-1xl p-1 tablet:p-2 list-inside list-disc laptop:list-outside laptop:w-4/5">
                <li ref={textThree}>{data.headerTaglineThree}</li>
                <li ref={textFour}>{data.headerTaglineFour}</li>
                <li ref={textFive}>{data.headerTaglineFive}</li>
                <li ref={textSix}>{data.headerTaglineSix}</li>
                <li ref={textSeven}>{data.headerTaglineSeven}</li>
              </ul>
              <h4
                ref={textLast}
                className="text-base italic tablet:text-base laptop:text-base laptopl:text-lg p-1 tablet:p-2 w-full laptop:w-4/5
              "
              >
                {data.headerTaglineLast}
              </h4>
            </div>

            <Socials className="mt-4 laptop:mt-6" />
          </div>

          {/* Cases Section */}
          <div
            className="mt-10 laptop:mt-20 p-2 laptop:p-0 laptop:mx-20"
            ref={casesRef}
          >
            <h2 className="text-3xl laptop:text-5xl text-bold mb-2">Кейсы</h2>
            <p className="text-base laptop:text-lg text-gray-600 dark:text-gray-400 mb-8 laptop:w-3/5">
              3 ключевых проекта с измеримыми результатами
            </p>

            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.cases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseData={caseItem} />
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div
            className="mt-10 laptop:mt-20 p-2 laptop:p-0 laptop:mx-20"
            ref={skillsRef}
          >
            <h2 className="text-3xl laptop:text-5xl text-bold mb-2">Навыки</h2>
            <p className="text-base laptop:text-lg text-gray-600 dark:text-gray-400 mb-8 laptop:w-3/5">
              Ключевые компетенции для создания продуктов мирового уровня
            </p>

            {data.skills && <SkillsSection skills={data.skills} />}
          </div>

          {/* About Section */}
          <div
            className="mt-10 laptop:mt-20 p-2 laptop:p-0 laptop:mx-20"
            ref={aboutRef}
          >
            <h2 className="text-3xl laptop:text-5xl text-bold mb-6">Обо мне</h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              <p className="text-lg laptop:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {data.elevatorPitch}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Целевые роли
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.targetRoles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Индустрии
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.targetIndustries.map((industry, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {data.resumePdfUrl && (
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                  <ResumeDownload pdfUrl={data.resumePdfUrl} />
                </div>
              )}
            </div>
          </div>

          <div
            className="mt-10 laptop:mt-30 p-2 laptop:p-0 laptop:mx-20"
            ref={workRef}
          >
            <h2 className="text-3xl laptop:text-5xl text-bold">
              Мои проекты и работа
            </h2>

            <h3 className="text-2xl pt-3 text-bold mt-4 laptop:mt-8">
              Компетенции
            </h3>
            <ul className="mt-2 text-base laptopl:text-lg list-inside list-disc laptop:list-outside laptop:w-4/5">
              {data.powers.map((e, key) => (
                <li key={key} className="p-1">
                  {e}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl pt-3 text-bold mt-4 laptop:mt-8">
              Проекты
            </h3>

            <div className="mt-4 laptop:mt-6 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {data.projects.map((project) => (
                <WorkCard
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  onClick={() => window.open(project.url)}
                />
              ))}
            </div>
          </div>

          <div
            className="mt-6 laptop:mt-20 p-2 laptop:p-0 laptop:mx-20"
            ref={edu}
          >
            <h1 className="text-3xl laptop:text-5xl text-bold">
              Консалтинг, менторство и преподавание
            </h1>
            <p className="mt-4 text-base laptop:text-lg w-full laptop:w-3/5">
              {data.edu.first}
            </p>
            <p className="mt-4 text-base laptop:text-lg w-full laptop:w-3/5">
              {data.edu.second}
            </p>
            <p className="mt-8 text-lg laptop:text-2xl w-full laptop:w-3/5">
              {data.edu.third}
            </p>
            <ul className="mt-4 text-base laptopl:text-lg list-inside list-disc laptop:list-outside laptop:w-4/5">
              {data.edu.list.map((e, key) => (
                <li key={key} className="p-1">
                  {e}
                </li>
              ))}
            </ul>
            <div>
              <Button
                className="relative"
                type="primary"
                onClick={() => window.open(data.edu.btnLink)}
              >
                {data.edu.btnText}
              </Button>
            </div>
          </div>
          <div
            className="mt-6 laptop:mt-20 p-2 laptop:p-0 laptop:mx-20"
            ref={crativeRef}
          >
            <h1 className="mb-8 text-3xl laptop:text-5xl text-bold">
              Креативные проекты и подкасты
            </h1>
            <div className="mt-5 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.creative.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  image={service.img}
                  description={service.description}
                  work={service.work}
                  onClick={() => window.open(service.url)}
                />
              ))}
            </div>
          </div>

          <div
            className="mt-16 laptop:mt-20 p-2 laptop:p-0 laptop:mx-20"
            ref={badminton}
          >
            <h2 className="text-3xl laptop:text-5xl text-bold">Бадминтон</h2>
            <p className="mt-4 text-xl w-full laptop:w-4/5 mb-4">
              {data.badminton.text}
            </p>
            <div>
              <Button
                className="relative"
                type="primary"
                onClick={() => window.open(data.badminton.btnLink)}
              >
                {data.badminton.btnText}
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
