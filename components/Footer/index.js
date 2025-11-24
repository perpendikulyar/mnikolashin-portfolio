import React from "react";
import Socials from "../Socials";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 laptop:mx-20 p-2 laptop:p-0">
        <div>
          <div className="text-2xl text-bold">Пока все.</div>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              ДАВАЙТЕ ДЕЛАТЬ
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              КРУТЫЕ ВЕЩИ
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              ВМЕСТЕ!
            </h1>
            <Button
              type="primary"
              onClick={() => window.open("https://t.me/mnikolashiin/")}
            >
              Написать мне
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
