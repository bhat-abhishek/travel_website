import React from 'react'
import BookingCard from './BookingCard'

const BookingDetails = () => {
  return (
    <div className='w-full  bg-white shadow-lg rounded-lg p-5 underline'>
        <h2 className='text-center text-2xl'>Booking Details </h2>
       <div>
        <BookingCard/>
       </div>
    </div>
  )
}

export default BookingDetails