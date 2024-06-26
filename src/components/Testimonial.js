import React from 'react';
import person1 from './../assets/persons-1.jpg';
import person2 from './../assets/person-2.jpg';
import person3 from './../assets/person-3.jpg';
import person4 from './../assets/person-4.jpg';

const Testimonial = () => {
  const testimonials = [
    { title: "Great Service", image: person1, rating: 5, message: "Really nice service." },
    { title: "Amazing Food", image: person2, rating: 4, message: "Really nice service." },
    { title: "Wonderful Ambiance", image: person3, rating: 5, message: "Really nice service." },
    { title: "Friendly Staff", image: person4, rating: 4, message: "Really nice service." },
  ];

  return (
    <section className="bg-gray-300 py-16">
      <div className='sm:px-[20%] px-10'>
        <h2 className="text-3xl font-bold mb-8">TESTIMONIAL</h2>
        <div className="flex sm:flex-row flex-col justify-between items-start gap-4">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="border py-4 px-5 rounded-lg bg-white flex flex-col justify-between w-full">
              <h3 className="text-lg font-semibold">{testimonial.title}</h3>
              <div className="flex justify-between items-center my-3 gap-1">
                <img src={testimonial.image} alt={testimonial.title} className="w-16 h-16 mt-2 rounded-full" />
                <span>{"⭐".repeat(testimonial.rating)}</span>
              </div>
              <div>{testimonial.message}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;