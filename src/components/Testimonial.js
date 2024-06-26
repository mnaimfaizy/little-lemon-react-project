import React from 'react';

const Testimonial = () => {
  const testimonials = [
    { title: "Great Service", image: "https://via.placeholder.com/150", rating: 5, date: "2023-04-01" },
    { title: "Amazing Food", image: "https://via.placeholder.com/150", rating: 4, date: "2023-04-02" },
    { title: "Wonderful Ambiance", image: "https://via.placeholder.com/150", rating: 5, date: "2023-04-03" },
    { title: "Friendly Staff", image: "https://via.placeholder.com/150", rating: 4, date: "2023-04-04" },
  ];

  return (
    <section className="p-16">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{testimonial.title}</h3>
            <img src={testimonial.image} alt={testimonial.title} className="w-full mt-2" />
            <div className="flex justify-between items-center mt-2">
              <span>{"⭐".repeat(testimonial.rating)}</span>
              <span>{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;