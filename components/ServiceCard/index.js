import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ServiceCard = ({ name, image, description, work, onClick }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link flex flex-col justify-items-center tablet:justify-items-start tablet:flex-row`}
      onClick={onClick}
    >
      <div className="w-1/2 tablet:w-1/4 overflow-hidden flex-none tablet:mr-4 mx-auto">
        <Image
          src={image}
          className="w-full max-h-min rounded-md"
          preload={"true"}
          width={600}
          height={600}
          priority={true}
          alt={name}
        ></Image>
      </div>
      <div className="flex-auto relative mt-4 tablet:mt-0 text-center tablet:text-left">
        <h3 className="text-xl tablet:text-xl">{name ? name : "Heading"}</h3>
        <p className="mt-2 laptop:mt-3 opacity-60 text-base laptop:text-lg">
          {description
            ? description
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
        </p>
        <p className="mt-2 laptop:mt-3 opacity-40 text-sm laptop:text-base">
          {work ? work : ""}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
