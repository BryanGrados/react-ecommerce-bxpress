import { Button, Divider } from '@mantine/core'
import React from 'react'

const Subscribe = () => {
    return (
        <section className="text-gray-600 dark:text-gray-300">
            <div className="container flex flex-wrap items-center py-24">
                <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
                    <h1 className="text-3xl font-medium text-black dark:text-white">Subscribe to our newsletter</h1>
                    <p className="mt-4 leading-relaxed">Subscribe to our newsletter and get 10% off your first purchase and be the first to know about our latest updates and offers.</p>
                </div>
                <div className="flex flex-col w-full p-8 mt-10 border border-gray-400 rounded-lg lg:w-2/6 md:w-1/2 bg-slate-200 dark:bg-amber-500 dark:border-none shadow-sm shadow-gray-500 md:ml-auto md:mt-0">
                    <h2 className="mb-5 text-lg font-semibold text-black">Subscribe here</h2>
                    <div className="relative my-2">
                        <label className="text-sm leading-7 text-gray-900 dark:text-black">Your Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-200 ease-in-out bg-gray-600 dark:bg-white border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-black" />
                    </div>
                    <div className="relative my-2">
                        <label className="text-sm leading-7 text-gray-900 dark:text-black">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 dark:bg-white rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-black" />
                    </div>
                    <div className='my-6'>
                        <Button variant="filled" fullWidth className="h-10 px-3 py-1 text-lg text-white border-0 rounded bg-zinc-900 focus:outline-none hover:bg-zinc-800">Subscribe</Button>
                        <p className="mt-3 text-xs dark:text-black">All information is kept confidential.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe