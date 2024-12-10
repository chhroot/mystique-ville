import React from "react";
import { MdMeetingRoom } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { FaTree } from "react-icons/fa6";

const ServiceSection = () => {
  return (
    <section className="bg-primary-accent/5 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex flex-col justify-center items-center mb-8 lg:mb-16">
          <h2 className="mb-4 font-funnel-display text-4xl md:text-5xl xl:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We Offer Best Services
          </h2>
          <p className="text-gray-500 font-funnel-sans text-xl  text-center dark:text-gray-400 w-full md:w-[50%]">
            Experience unmatched comfort and care with our tailored services,
            designed to make every moment extraordinary.
          </p>
        </div>
        <div className="pt-10 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="flex flex-col items-center">
            <div className="flex bg-primary-accent text-white justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-20 lg:w-20">
              <MdMeetingRoom className="h-8 w-8 lg:h-12 lg:w-12" />
            </div>
            <h3 className="mb-2 font-funnel-display text-2xl font-bold dark:text-white">
              Luxurious Rooms
            </h3>
            <p className="text-gray-500 text-center font-funnel-sans dark:text-gray-400">
              Premium amenities, plush furnishings, and a serene atmosphere that
              promises an unforgettable stay in Ooty's most refined retreat.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex lg:h-20 lg:w-20 bg-primary-accent text-white justify-center items-center mb-4 w-10 h-10 rounded-full ">
              <MdRoomService className="h-8 w-8 lg:h-12 lg:w-12" />
            </div>
            <h3 className="mb-2 font-funnel-display text-2xl font-bold dark:text-white">
              Quality Service
            </h3>
            <p className="text-center text-gray-500 font-funnel-sans dark:text-gray-400">
              Experience hospitality at its finest. Our team is dedicated to
              ensuring your stay is nothing short of extraordinary.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex bg-primary-accent text-white justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-20 lg:w-20">
              <FaTree className="h-8 w-8 lg:h-12 lg:w-12" />
            </div>
            <h3 className="mb-2 text-2xl font-funnel-display font-bold dark:text-white">
              Great Environment
            </h3>
            <p className="text-center text-gray-500 font-funnel-sans dark:text-gray-400">
              Here, every sunrise inspires, every sunset soothes, and every
              moment is a celebration of nature's perfection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
