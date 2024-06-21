import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {}

export const Dekstop = () => {
    return (
        <>
            <div className="rounded-t-[40px] py-4 bg-slate-200 px-6">
                <div className='flex justify-center items-center gap-4'>
                    <FaSearch size={20} className="cursor-pointer text-dark " />
                    <p className='text-secondary font-semibold text-lg'>
                        Cari kelas, cth : fullstack, devops
                    </p>
                </div>
                
            </div>
            <div className='rounded-b-[40px] bg-white px-6'>
                    <h1 className='text-dark'>testing</h1>
            </div>
        </>
    )
}
