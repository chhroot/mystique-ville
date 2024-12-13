import { Carousel } from "flowbite-react";
import React from "react";

const page = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="h-56 mb-10 md:mb-0 sm:h-64 xl:h-96">
          <Carousel slideInterval={5000}>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>

        <div className="font-light text-justify text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="font-funnel-display mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Restaurant at Mystique Ville
          </h2>
          <p className="mb-4 font-funnel-sans">
            At Mystique Ville, our restaurant delivers a world-class dining
            experience that sets a new standard in hospitality. Known for its
            exceptional service, it’s a culinary destination cherished by guests
            at both our resorts. Our menu boasts an eclectic mix of dishes, from
            Continental and Chinese delicacies to authentic Indian and Tandoori
            specialties. Start your day with a hearty American breakfast or
            savor the rich flavors of traditional South Indian cuisine, crafted
            to perfection.
          </p>
          <p className="font-funnel-sans">
            For coffee lovers, our unique coffee shop offers a one-of-a-kind
            experience. Sip on freshly brewed coffee while soaking in the
            breathtaking view of the iconic Kalhatti waterfalls. Every meal and
            every moment at Mystique Ville is crafted to delight. Join us and
            experience dining like never before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
