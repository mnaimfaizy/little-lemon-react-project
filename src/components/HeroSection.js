import React from 'react'
import greekSalad from './../assets/greek-salad.jpg'
import Button from './Button';

function HeroSection({ withButton = true }) {
    return (
      <section className="flex sm:flex-row flex-col sm:gap-1 gap-4 items-center justify-between p-16 bg-secondary">
        <div className="flex-1 text-white">
          <h1 className="text-4xl font-bold ">Little limeon</h1>
          <p className="text-sm mt-1 ">Location Here</p>
          <p className="mt-4">Description goes here. This is a brief description of the content or purpose of the hero section.</p>
          {withButton && <Button title="Reserve a Table" /> }
        </div>
        <div className="flex-1 flex justify-end">
          <img src={greekSalad} alt="Hero" className="w-[280px] rounded-2xl" />
        </div>
      </section>
    );
  }

export default HeroSection