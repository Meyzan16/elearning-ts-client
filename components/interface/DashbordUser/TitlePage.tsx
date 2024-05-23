import React from 'react'

type Props = {
    title: string,
    subTitle: string
}

const TitlePage = ({title, subTitle} : Props) => {
  return (
    <div className='w-full lg:max-w-lg'>
        <div className='py-2 font-Poppins'>
            <h1 className='text-xl md:text-2xl lg:text-4xl text-dark font-semibold'>{title}</h1>
            <p className='mt-4 text-md md:text-lg lg:text-xl text-slate-400'>{subTitle}</p>
        </div>
    </div>
  )
}

export default TitlePage;