import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black p-12'>
      <figure>
        <Image src='/assets/logo.png' width={100} height={100} alt='logo' />
      </figure>
    </footer>
  )
}

export default Footer