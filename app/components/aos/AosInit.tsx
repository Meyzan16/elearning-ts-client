'use client'

import Aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";

const AosInit = () => {
    useEffect(() => {
        Aos.init({
            // duration: 1000,
            offset:  0
        });
    },[])

  return null;
}

export default AosInit