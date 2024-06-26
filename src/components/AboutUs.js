import React from 'react';
import restaurant from './../assets/restaurant.jpg';
import restaurantChefB from './../assets/restaurant-chef-B.jpg';

const AboutUs = () => {
  return (
    <section className="flex sm:flex-row flex-col items-center justify-between sm:p-16 p-8">
      <div className="flex-1">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-sm mt-1">Our Journey</p>
        <p className="mt-4">Here is a brief description of our journey, how we started, our mission, and what we aim to achieve. This section gives visitors an insight into the values and the story behind our establishment.</p>
      </div>
      <div className="flex-1 flex justify-end relative sm:mt-1 mt-16">
        <img src={restaurantChefB} alt="About Us 1" className="max-w-full h-[200px] absolute top-0 right-0" style={{ transform: 'translate(20%, -20%)' }} />
        <img src={restaurant} alt="About Us 2" className="max-w-full h-[200px]" />
      </div>
    </section>
  )
}

export default AboutUs