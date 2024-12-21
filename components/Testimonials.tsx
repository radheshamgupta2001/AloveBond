import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      image: "/user1.jpg", // Corrected path
      quote:
        "AloveBond helped me navigate my toughest days. It's a space where I feel heard and supported.",
      name: "Dimple",
    },
    {
      image: "/user2.jpg", // Corrected path
      quote:
        "I love the journaling feature! It gives me a moment of reflection and clarity every day.",
      name: "Ravi",
    },
    {
      image: "/user3.jpg", // Corrected path
      quote:
        "The mood tracker has been a game-changer for me. I can see my progress and better understand my emotions.",
      name: "Sneha",
    },
  ];

  return (
    <section className="testimonials bg-light-900 dark:bg-dark-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100 mb-10">
          What Our Users Say
        </h2>
        <div className="testimonial-carousel flex overflow-x-auto space-x-8 px-4 md:justify-center md:flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial bg-white dark:bg-dark-700 rounded-lg shadow-lg max-w-xs p-6 flex flex-col items-center space-y-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <p className="text-light-600 dark:text-light-300 italic">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-dark-800 dark:text-light-100">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
