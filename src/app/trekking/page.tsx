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
            Trekking at Mystique Ville
          </h2>
          <p className="mb-4 font-funnel-sans">
            Discover the untamed beauty of the Nilgiri Hills with our exclusive
            trekking and jeep safari experiences. Mystique Ville offers a unique
            opportunity to explore the majestic mountain ranges, lush greenery,
            and diverse wildlife that make Ooty a nature lover’s paradise. Our
            forest jeep safari promises a thrilling ride through the hills,
            where you can immerse yourself in the raw beauty of the terrain,
            spot native wildlife, and experience the charm of life around the
            forests. A trip to the Queen of Hill Stations is incomplete without
            this adventure, and we ensure it’s a lifetime experience for our
            guests
          </p>
          <p className="mb-4 font-funnel-sans">
            Standing atop the hills, you’ll be captivated by the panoramic
            vistas of misty mountains, inviting trails, and hidden secrets
            waiting to be explored. Let the pristine sounds of nature refresh
            your soul as you soak in Ooty’s timeless charm. Ooty’s heavenly
            weather graces it year-round, but the best times to visit are
            between September-December and March-June. At an elevation of 2240
            meters, Ooty’s mountains rank among the tallest in the country. With
            grasslands, waterfalls, streams, lakes, and an incredible variety of
            flora and fauna, this region offers endless possibilities for nature
            enthusiasts.
          </p>
          <p className="font-funnel-sans">
            Mystique Ville invites you to indulge in long walks, guided treks,
            fishing, horse riding, cycling, and visits to enchanting tea
            gardens. Explore our exclusive 150-acre forest reserve, complete
            with waterfalls and brooks, where guided treks and wildlife safaris
            can be arranged for an unforgettable adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
