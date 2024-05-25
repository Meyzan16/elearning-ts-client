import DataCustomSelection from '@/data/CustomSelection';
import React from 'react'


const CustomSelection = () => {
    return (
        <div className="mt-6">
            <div className='my-4 gap-4 flex overflow-x-auto md:grid md:grid-cols-2 xl:grid-cols-8 '>
                {
                    DataCustomSelection && DataCustomSelection.length > 0 ?
                        DataCustomSelection.map((i, index) => (
                            <div key={index} className='md:max-w-sm'>
                                <div key={index} className='md:max-w-md'>
                                    <div className='py-2 px-4 rounded-full bg-dark'>
                                        <div className='font-Poppins text-base md:text-lg text-white text-center whitespace-nowrap'>
                                            {i.label}
                                        </div>
                                    </div>
                                </div>
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