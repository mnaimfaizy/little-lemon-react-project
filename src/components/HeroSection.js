import React from 'react'
import restaurantFood from './../assets/restauranfood.jpg'
import Button from './Button';

function HeroSection({ withButton = true }) {
    return (
      <section className="bg-secondary relative">
        <div className='flex sm:flex-row flex-col sm:gap-1 gap-4 items-center justify-between mb-28 sm:px-[20%] px-10 py-10'>
          <header className="flex-1 text-white">
            <h1 className="text-4xl font-bold text-primary ">Little limeon</h1>
            <p className="text-sm mt-1 ">Location Here</p>
            <p className="mt-4">Description goes here. This is a brief description of the content or purpose of the hero section.</p>
            {withButton && <Button title="Reserve a Table" /> }
          </header>
          <figure className="flex-1 flex sm:justify-end justify-center">
            <img src={restaurantFood} alt="Hero" className="sm:w-[200px] w-3/4 rounded-2xl sm:absolute sm:top-14" />
          </figure>
        </div>
      </section>
    );
  }

export default HeroSection