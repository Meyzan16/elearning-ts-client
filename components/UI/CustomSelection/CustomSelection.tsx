import DataCustomSelection from '@/data/CustomSelection';
import React from 'react'


const CustomSelection = () => {
    return (
        <div className="mt-6">
            <div className='flex md:flex-wrap gap-2 overflow-auto'>
                {
                    DataCustomSelection && DataCustomSelection.length > 0 ?
                        DataCustomSelection.map((i, index) => (
                                <div key={index} className='md:max-w-md'>
                                    <button className='bg-dark py-2 px-6 rounded-full'>
                                        <div className=' font-Poppins text-base md:text-lg text-white text-center whitespace-nowrap'>
                                            {i.label}
                                        </div>
                                    </button>
                                </div>
                        ))
                        : (
                            <>
                                <div className='w-full rounded-3xl bg-dark p-4 md:p-10 flex justify-center'>
                                    <div className='font-Poppins text-xl text-white'>
                                        Tidak ada data
                                    </div>
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default CustomSelection;