import GuardToVerification from '@/components/UI/Auth/GuardToVerification';
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <GuardToVerification 
      Title='New Account'
      subTitle='Lengkapi form di bawah dengan'
      titleForm='Register'
      type='register'
    />
  )
}

export default Page;