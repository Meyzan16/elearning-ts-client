import React from 'react';
import Illustration from '@/public/assets/404_illustration.svg';
import Text from '@/public/assets/404_text.svg';
import Image from 'next/image';

interface Props {};

const NotFound = (props: Props) => {
  return (
    <div className='flex justify-center items-center  min-h-screen gap-10'>
      <div className='flex justify-center items-center'>
        <Image
          src={Illustration}
          alt="Illustration"
          className='w-[500px] h-[500px]' // Adjust the width and height as needed
        />
      </div>
      
      <div className='flex justify-center items-center'>
        <Image
          src={Text}
          alt="Illustration"
          className='w-[500px] h-[500px]' // Adjust the width and height as needed
        />
      </div>

    </div>
  );
};

export default NotFound;
