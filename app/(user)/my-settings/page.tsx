import TitlePage from '@/components/UI/User/TitlePage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IcProfile from '@/public/assets/ic_my_profile.svg';
import IcPassword from '@/public/assets/ic_my_password.svg';

type Props = {}

const MySettings = (props: Props) => {
    return (
        <div>
            <div className="space-y-4 border-b pb-4 text-sm font-medium text-gray-900">
                <TitlePage title="My Settings" subTitle="Pengaturan akun akan dibutuhkan untuk proses konfirmasi dan detail pengguna" />
            </div>

            <div className='xl:max-w-4xl md:w-full lg:flex gap-4 '>

                <div className='w-full bg-white rounded-2xl mt-4 p-6'>
                    <div>
                        <Image 
                            src={IcProfile}
                            width={70}
                            height={70}
                            alt='profile'
                        />
                    </div>
                    <div className='mt-4'>
                        <h1 className='font-Poppins font-bold text-2xl text-dark'>My Profile</h1>
                    </div>
                    <div className='mt-4'>
                        <p className='font-Poppins text-md text-secondary '>Udah data diri kamu</p>
                    </div>
                    <div className='bg-gray-200 rounded-full w-full py-2 mt-4'>
                        <Link href="/edit-profile" >
                            <div className='font-Poppins font-semibold text-center text-dark text-md'>
                                Edit Now
                            </div>
                        </Link>

                    </div>
                </div>

                <div className='w-full bg-white rounded-2xl mt-4 p-6'>
                    <div>
                        <Image 
                            src={IcPassword}
                            width={70}
                            height={70}
                            alt='profile'
                        />
                    </div>
                    <div className='mt-4'>
                        <h1 className='font-Poppins font-bold text-2xl text-dark'>My Profile</h1>
                    </div>
                    <div className='mt-4'>
                        <p className='font-Poppins text-md text-secondary '>Udah data diri kamu</p>
                    </div>
                    <div className='bg-gray-200 rounded-full w-full py-2 mt-4'>
                        <Link href="/edit-password" >
                            <div className='font-Poppins font-semibold text-center text-dark text-md'>
                                Edit Now
                            </div>
                        </Link>

                    </div>
                </div>

                


            </div>
        </div>
    )
}

export default MySettings