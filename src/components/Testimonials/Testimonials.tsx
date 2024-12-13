import React from "react";

const testimonials = [
  {
    name: "Srinivas",
    title: "Stunning Views, Excellent Hospitality",
    text: [
      "I recently stayed at Mystique Villa in Ooty, and it was an unforgettable experience. The hotel offers breathtaking views, surrounded by lush greenery and the soothing presence of a nearby waterfall, which can be seen right from the room. It’s the perfect place to connect with nature.",
      "The food was excellent, with a variety of delicious options that added to the charm of the stay. The property is well-maintained, and the staff were friendly and attentive, ensuring a comfortable and pleasant stay.",
    ],
  },
  {
    name: "Kamal Venkat",
    title: "Cozy Campfires and Fireplaces",
    text: [
      "This is an old British bungalow. The rooms are clean with good service available round the clock. Swimming pools are rare in this area but this place had a neatly maintained pool.",
      "Waterfall view rooms are great. They had campfire and in-room fire options. Must go place if you like Mudumalai.",
    ],
  },
  {
    name: "Prathap Kothakota",
    title: "Breathtaking Views and Lush Gardens",
    text: [
      "We visited this place during April. To reach this place you need to come down by crossing 15 hairpin curves which was a great feeling. This place is marvellous with breathtaking views, lush garden, greenery, fresh air, great food, good staff, and waterfall view.",
      "We stayed here for 3 days and we enjoyed each and every moment of our stay. The food was too good and we enjoyed a lot. We also went on a trek to nearby waterfalls. Looking forward to visiting this place again.",
    ],
  },
  {
    name: "Ramprasad Ananthaswamy",
    title: "Perfect Escape from the Ordinary",
    text: [
      "We stayed here for two nights. This was our 5th or 6th time, lost track. We stay here every time we feel like getting away. JP, Rajesh, front office staff is very courteous and efficient. Bala the knowledgeable trekking guide always manages a new trek for us and we see some wild animals in their elements.",
      "Some new faces but friendly cook and the attending staff. The owner and the management has managed to keep the place rustic unlike other expensive concrete garish resorts we have been to all over.",
    ],
  },
];
const bgColors = ["bg-blue-300", "bg-green-300", "bg-red-300", "bg-sky-300"];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 font-funnel-display text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Voices of Our Guests
          </h2>
          <p className="mb-8 font-funnel-sans font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Experience Ooty Through the Words of Those Who’ve Been Here
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 font-funnel-sans">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className={`flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 ${
                index % 2 === 0 ? "lg:border-r" : ""
              } dark:bg-gray-800 dark:border-gray-700`}
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.title}
                </h3>
                {testimonial.text.map((paragraph, i) => (
                  <p key={i} className="my-4">
                    {paragraph}
                  </p>
                ))}
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-white ${
                    bgColors[index % bgColors.length]
                  }`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{testimonial.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Guest
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
