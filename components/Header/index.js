import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({
  handleCasesScroll,
  handleSkillsScroll,
  handleWorkScroll,
  handleCreativeScroll,
  handleBadmintintonScroll,
  handleEduScroll,
  isBlog,
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const bgColor = theme === "light" ? "bg-white" : "bg-dark";

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      width={20}
                      height={20}
                      className="h-6 w-6"
                      alt="icon"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    />
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    className="h-6 w-6"
                    width={20}
                    height={20}
                    alt="icon"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleCasesScroll}>Кейсы</Button>
                  <Button onClick={handleSkillsScroll}>Навыки</Button>
                  <Button onClick={handleWorkScroll}>Проекты</Button>
                  <Button onClick={handleEduScroll}>Консалтинг</Button>
                  <Button onClick={handleCreativeScroll}>
                    Подкасты и музыка
                  </Button>
                  <Button onClick={handleBadmintintonScroll}>Бадминтон</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:perpendikulyar@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() =>
                      window.open("mailto:perpendikulyar@gmail.com")
                    }
                  >
                    Написать
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() =>
                      window.open("mailto:perpendikulyar@gmail.com")
                    }
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 laptop:mx-4 hidden flex-row items-center justify-between ${bgColor} dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleCasesScroll}>Кейсы</Button>
            <Button onClick={handleSkillsScroll}>Навыки</Button>
            <Button onClick={handleWorkScroll}>Проекты</Button>
            <Button onClick={handleEduScroll}>Консалтинг</Button>
            <Button onClick={handleCreativeScroll}>Подкасты и музыка</Button>
            <Button onClick={handleBadmintintonScroll}>Бадминтон</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button
              onClick={() => window.open("mailto:perpendikulyar@gmail.com")}
            >
              Написать
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  width={20}
                  height={20}
                  className="h-6 w-6"
                  alt="icon"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></Image>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button
              onClick={() => window.open("mailto:perpendikulyar@gmail.com")}
            >
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                className="block w-16"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  alt="icon"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
