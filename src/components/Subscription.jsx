import React from 'react'
import Button from './Button'

const Subscription = () => {
    return (
        <div className='grid md:grid-cols-3 gap-2 gap-y-4 items-center my-8 w-full'>
            <input
                type="email"
                name="email"
                placeholder='you@example.com'
                className=' md:col-span-2 shadow-md outline-none border-none p-4 rounded-md' />
            <Button className='md:col-span-1 whitespace-nowrap  bg-blue-600 text-white font-semibold py-4 w-full m-auto rounded-md'>Start For Free</Button>
        </div>
    )
}

export default Subscription