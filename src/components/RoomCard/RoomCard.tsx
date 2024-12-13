import { Button } from "flowbite-react";
import React from "react";

const RoomCard = () => {
  return (
    <div className="w-[400px] h-full flex-col bg-white dark:bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-full h-56 object-cover rounded-xl p-2"
        src="https://i.ibb.co/QrbxLQ9/vintage-2.jpg"
        alt="product image"
      />
      <div className="p-4 h-46 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-funnel-display text-xl font-semibold">
            Standard Room
          </span>
          <span className="font-funnel-sans text-sm w-full text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipisicing sfs sdfs elit.
            Quos obcaecati enim, et doloremque quibusdam dolorem
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-funnel-display text-primary-accent font-bold text-2xl">
            $199 <span className="text-sm text-black">/NIGHT</span>
          </span>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
