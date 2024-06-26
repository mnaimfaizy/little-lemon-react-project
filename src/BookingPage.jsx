import React from 'react'
import BookingForm from './components/BookingForm'
import HeroSection from './components/HeroSection'

const BookingPage = () => {

  return (
    <>
        <HeroSection withButton={false} />
        <BookingForm />
    </>
  )
}

export default BookingPage