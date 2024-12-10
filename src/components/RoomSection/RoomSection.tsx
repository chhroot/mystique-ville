import React from "react";
import RoomCard from "../RoomCard/RoomCard";

const RoomSection = () => {
  return (
    <section className="bg-primary-accent/5 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex flex-col justify-center items-center mb-8 lg:mb-16">
          <h2 className="mb-4 font-funnel-display text-4xl md:text-5xl xl:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Rooms
          </h2>
          <p className="text-gray-500 font-funnel-sans text-xl  text-center dark:text-gray-400 w-full md:w-[50%]">
            Experience unmatched comfort and care with our tailored services,
            designed to make every moment extraordinary.
          </p>
        </div>
        <div className="pt-10 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
