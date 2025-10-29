import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 max-h-min mob:h-auto"
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h3 className="mt-5 text-xl tablet:text-2xl font-medium">
        {name ? name : "Project Name"}
      </h3>
      <h4 className="text-base opacity-50">
        {description ? description : "Description"}
      </h4>
    </div>
  );
};

export default WorkCard;
