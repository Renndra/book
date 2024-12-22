import React from 'react'
import Image from 'next/image'
import { Client1 } from '../../../public'
import { Client2 } from '../../../public'
import { Kutip } from '../../../public'

const Testimonial = () => {
  return (
    <section>
      <div className='p-10 mt-20'>
        <div className='grid grid-cols-3 gap-3'>
          <div className='testimoni text-center border-2'>
            <div>
              <div className='flex justify-center items-center text-center'>
                <Image src={Client1} className='gambar ml-32 mr-20'/>
                <Image src={Kutip} className='gambar'/>
              </div>
              <h5>Eka Ardilah</h5>
              <p>I feel very helpful with all the books provided,so I do my job easily and happily</p>
            </div>
          </div>
          <div className='testimoni text-center border-2'>
            <div>
              <div className='flex justify-center items-center text-center'>
                <Image src={Client2} className='gambar ml-32 mr-20'/>
                <Image src={Kutip} className='gambar'/>
              </div>
              <h5>Eka Ardilah</h5>
              <p>I feel very helpful with all the books provided,so I do my job easily and happily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial