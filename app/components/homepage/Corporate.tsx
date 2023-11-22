import React from 'react'
import Image from 'next/image'


type Props = {}

const Corporate = (props: Props) => {
  return (
    <div className='py-16 hidden sm:flex '>
        <div className='max-w-screen-1600px w-full'>
            <div className='flex justify-center gap-8 bg-slate-200 py-16 px-2'>
                <Image 
                    src={require("../../../public/assets/gojek.svg")}
                    alt="gojek"
                />
            </div>
        </div>
    </div>
  )
}
export default Corporate