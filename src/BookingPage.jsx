import React from 'react'
import BookingForm from './components/BookingForm'
import HeroSection from './components/HeroSection'

const BookingPage = () => {

  return (
    <div>
        <HeroSection withButton={false} />
        <BookingForm />
    </div>
  )
}

export default BookingPage