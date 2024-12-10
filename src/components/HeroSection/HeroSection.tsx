import { Button, Carousel } from "flowbite-react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid h-screen max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <a
            href="#"
            className="font-funnel-sans inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-primary-accent bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-primary-accent rounded-full text-white px-4 py-1.5 me-3">
              Click Here
            </span>{" "}
            <span className="text-sm font-medium">
              Book Your Retreat at Kluney Manor Now!
            </span>
          </a>
          <h1 className="font-funnel-display max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Discover Tranquility
          </h1>
          <p className="font-funnel-sans max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            In the heart of the Queen of Hills. A luxurious retreat overlooking
            the race course, offering an immersive journey into timeless
            sophistication and refined hospitality.
          </p>
          <Button className="inline-flex mr-2">Book Now</Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
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
      </div>
    </section>
  );
};

export default HeroSection;
