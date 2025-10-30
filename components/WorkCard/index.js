import React from "react";
import Image from 'next/image';

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className=" block relative rounded-lg overflow-hidden transition-all ease-in-out duration-300 max-h-min mob:h-auto"
      >
        <Image
          alt={name}
          preload={true}
          width={600} 
          height={240}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-in-out duration-300 rounded-lg"
          src={img}
        ></Image>
      </div>
      <h3 className="mt-5 text-xl tablet:text-2xl font-medium">
        {name ? name : "Project Name"}
      </h3>
      <div className="text-base">
        {description.map((e, k) => (
          <span key={k} className="py-2 pr-2 whitespace-pre-wrap text-gray-500"><span className="text-indigo-600">#</span>{'\u00A0'}{e.replace(/ /g, '\u00A0')} </span>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
