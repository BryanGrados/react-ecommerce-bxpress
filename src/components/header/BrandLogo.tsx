import React from 'react'
import { Text, UnstyledButton } from '@mantine/core'
import { GiLargeDress } from 'react-icons/gi'

const BrandLogo = () => {

    //ref to tailwindcss.com
    const home = 'https://tailwindcss.com/'

    return (
        <div className={`flex items-center h-full`}>
            <UnstyledButton
                component='a'
                href={home}
                target='_blank'
            >
                <div className='flex items-center text-xl md:text-2xl space-x-5'>
                    <GiLargeDress className='text-blue-400 dark:text-yellow-300' />
                    <Text className='font-bold text-blue-600 dark:text-yellow-500'>Bxpress</Text>
                </div>
            </UnstyledButton>
        </div>
    )
}

export default BrandLogo