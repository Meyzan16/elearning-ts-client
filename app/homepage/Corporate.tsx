import React from 'react'
import Image from 'next/image'

const Corporate = () => {
  return (
    <div className='py-16 hidden md:flex '>
        <div className='max-w-screen-1600px w-full'>
            <div className='flex justify-center gap-8 bg-slate-200 py-16 px-2'>
                <Image 
                       data-aos="zoom-in"
                       data-aos-duration="1000"
                       data-aos-delay="300"
                    src={require("../../public/assets/gojek.svg")}
                    alt="gojek"
                />
            </div>
        </div>
    </div>
  )
}
export default Corporate