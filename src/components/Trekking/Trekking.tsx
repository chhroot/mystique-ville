import React from "react";

const Trekking = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-justify text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="font-funnel-display mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Forest Safari & Trekking
          </h2>
          <p className="mb-4 font-funnel-sans">
            Make your journey complete with our thrilling forest jeep safari and
            trekking adventures. Explore a 150-acre forest reserve adorned with
            waterfalls, brooks, and the unique wildlife of the Nilgiri Hills.
            Our guided treks and safaris ensure an up-close encounter with
            nature's finest.
          </p>
          <p className="font-funnel-sans">
            Discover Ooty’s misty charm, verdant grasslands, and serene lakes
            for a truly rejuvenating escape. Adventure meets tranquility,
            offering you memories that last a lifetime.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Trekking;
