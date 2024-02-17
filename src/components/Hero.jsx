import React from 'react'
import Subscription from './Subscription'
import WidthWrapper from './WidthWrapper'
import { Check } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <article>
            <WidthWrapper className='grid lg:grid-cols-2 gap-6 place-items-center'>
                <section className='w-full'>
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-medium'>Turn expertise into revenue</h1>
                        <p className='text-xl'>Access features you need to create, market, and sell your first online course.</p>
                        <ul className='space-y-1 text-lg'>
                            <li>
                                <Check size={20} color='white' className='inline mr-2 p-[2px] bg-black rounded-full' />
                                <span>Earn recurring revenue with subscriptions and communities</span>
                            </li>
                            <li>
                                <Check size={20} color='white' className='inline mr-2 p-[2px] bg-black rounded-full' />
                                <span>Attract customers with trials and promotions</span>
                            </li>
                            <li>
                                <Check size={20} color='white' className='inline mr-2 p-[2px] bg-black rounded-full' />
                                <span>Create irresistible offers with bundles</span>
                            </li>
                        </ul>
                    </div>
                    <aside className='w-full'>
                        <Subscription />
                    </aside>
                    <p className='text-lg'>Forever free. <span className='font-semibold'>No credit card required.</span></p>
                </section>
                <section>
                    <Image src='/assets/hero.avif' width={650} height={650} alt='hero' />
                </section>
            </WidthWrapper>
        </article>
    )
}

export default Hero