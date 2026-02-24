import { Brain, FileUser, TabletSmartphone, ShoppingCart } from 'lucide-react';
import React from 'react'

const Services = () => {
    return (
        <div className='flex w-full h-screen'>

            <div className='w-1/2 flex-col pl-28' >
                <div className='mx-8 my-4'>
                    <h1 className='text-4xl text-black font-extrabold px-8 pt-12'>Our Services</h1>
                    <p className='text-regular text-sm text-black opacity-70 px-8 pt-5'>Braindigit provides end-to-end digitization services <br /> to Startups, SMEs, corporate enterprises and Government level organizations.</p>
                </div>

                <div className='flex w-2/3 ml-10 px-10 py-8'>
                    <ShoppingCart className='w-8 h-10'/>
                    <div>
                    <h1 className='text-sm text-black font-bold px-8'>Website & e-Commerce</h1>
                    <p className='text-regular text-sm text-black opacity-70 px-8 pt-2'> Connect prompt,and sell your products and services online.</p>
                    </div>
                </div>

                <div className='flex w-2/3 ml-10 px-10 py-8 '>
                    <TabletSmartphone className='w-8 h-10'/>
                    <div>
                    <h1 className='text-sm text-black font-bold px-4'>Custom Web & Mobile App</h1>
                    <p className='text-regular text-sm text-black opacity-70 px-4 pt-2'> Introduce your business and brand with web
                      and mobile application.</p>
                    </div>
                </div>

                <div className='flex w-2/3 ml-10 px-10 py-8 '>
                    <FileUser className='w-8 h-10'/>
                    <div>
                    <h1 className='text-sm text-black font-bold px-4'>Enterprise Application</h1>
                    <p className='text-regular text-sm text-black opacity-70 px-4'> Streamline business operation across the
                        organization.</p>
                    </div>
                </div>

                <div className='flex w-2/3 ml-10 px-10 py-8 '>
                    <Brain className='w-8 h-10'/>
                    <div>
                    <h1 className='text-sm text-black font-bold px-4'>Training & Consulting</h1>
                    <p className='text-regular text-sm text-black opacity-70 px-4'> Get more insight on technical consultation and
                       competitive business solution.</p>
                    </div>
                </div>


            </div>

            <div className='w-1/2'>
            <img src="/images/services.png" alt="" className='h-3/4 px-10 pt-40'/>
            <p className='text-lg text-white bg-blue-400 w-2/3 rounded-xl p-2 text-center m-20'> Interested in our services? Get in touch with us</p>
            </div>

        </div>
    )
}

export default Services;