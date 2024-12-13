import { Carousel } from "flowbite-react";
import React from "react";

const page = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
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
            About Us
          </h2>
          <p className="mb-4 font-funnel-sans">
            Nestled in the serene embrace of the "Queen of the Hills," Mystique
            Ville is a Victorian Suite Hotel that feels like home. Surrounded by
            a tranquil and secure residential neighborhood. Conveniently
            located, Mystique Ville is just 100 km from Coimbatore Airport, a
            short 15-minute drive from the Ooty main bus stand and railway
            station, and only 10 minutes away from popular attractions like the
            Botanical Garden and the Boat House.
          </p>
          <p className="mb-4 font-funnel-sans">
            The story of Mystique Ville began in 1828, when Capt. Macpherson of
            the British Army fell in love with Ooty while leading a team tasked
            with building the region’s first road. After years of hard work
            carving paths through rugged terrain, the captain decided to stay.
            He built Mystique Ville brick by brick, watching his vision come to
            life.
          </p>
          <p className="font-funnel-sans">
            In 1852, with a glass of fine wine in hand, the captain declared,
            "Let’s create a home here in Ooty." And so he did. Mystique Ville
            later became the summer retreat of the Maharaja of Patna. Today, for
            the first time, the doors of this enchanting colonial villa are open
            to welcome you. Experience the charm, history, and serenity of
            Mystique Ville—a timeless treasure in the heart of Ooty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
