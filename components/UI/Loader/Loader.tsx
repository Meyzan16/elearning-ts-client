'use client';

import React, { FC } from 'react'
import { PulseLoader } from 'react-spinners';

interface Props  {
    text: string;
    color: string;
    loading: (boolean);
    size?: number
}

const ComponentLevelLoader:FC<Props> = ({text, color , loading, size}) => {
  return (
    <div className='flex gap-2 items-center'>
        {text}
        <PulseLoader
        color={color}
        loading={loading}
        size={size || 10}
        data-testid = 'loader'
        />
    </div>
  )
}

export default ComponentLevelLoader