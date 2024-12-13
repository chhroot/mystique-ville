import React from "react";

const RestaurantSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="office content 2"
          />
        </div>
        <div className="font-light text-justify text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="font-funnel-display mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Dining at Mystique Ville
          </h2>
          <p className="mb-4 font-funnel-sans">
            At Mystique Ville, our restaurant offers an unparalleled dining
            experience. Our diverse menu caters to every palate, featuring a
            wide range of culinary delights, from Continental and Chinese
            specialties to Indian favorites and authentic Tandoori dishes.
            Guests can also enjoy a hearty American breakfast or indulge in the
            vibrant flavors of traditional South Indian cuisine.
          </p>
          <p className="font-funnel-sans">
            For a more relaxed experience, visit our exclusive coffee lounge at
            Mystique Ville. This one-of-a-kind coffee shop allows you to savor
            premium coffee while basking in the breathtaking views of the iconic
            Kalhatti waterfalls. Whether it's a culinary journey or a serene
            coffee moment, Mystique Ville offers an experience that’s simply
            unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
