import { useRef } from "react";

import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Button from "../components/Button";

// Local Data
import data from "../data/portfolio.json";
import Head from "next/head";

export default function Home() {
  // Ref
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

  const handleAboutScroll = () => {
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
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="relative">
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>

        <div className="container mx-auto mb-10">
          <Header
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
