import React from 'react'
import Popular from '../popular'
const hero = () => {
  return (
    <div className='w-full h-[500px] md:h-[600px] bg-[url("/hero.png")] bg-cover bg-center'>
  <div className='pt-20 md:pt-40 px-5 md:pl-20 mt-5'>
    <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
      Book is a window to the world
    </h1>
    <p className='mb-6 mt-4 text-lg text-gray-700'>
      Wake up your dream by reading a book every day
    </p>
    <a href={Popular} className='inline-block px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600'>
      Book Now
    </a>
  </div>
</div>
      )
      }
export default hero;