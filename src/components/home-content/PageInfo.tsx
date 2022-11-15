import { Spoiler, useMantineColorScheme } from '@mantine/core'
import React from 'react'


const PageInfo = () => {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === 'dark';

  return (
    <div className='flex flex-col items-center justify-center space-y-5'>
      <h1 className='text-4xl font-bold text-center'>
        Welcome to <span className='text-blue-500 dark:text-yellow-500'>Bxpress</span>
      </h1>
      <Spoiler
        maxHeight={100}
        showLabel='Show more'
        hideLabel='Show less'
        className='w-full'
        styles={{
          control: {
            color: dark ? 'white' : '',
            fontWeight: 700,
          },
        }}
      >
        <p className='text-justify'>
          Bxpress is a web application that allows you to buy online products
          from different stores. Our history began in 2021 when we decided to
          create a web application that would allow us to buy products from
          different stores in one place. We are a team of 3 people who are
          passionate about technology and we are constantly looking for new
          challenges. We are currently working on the project and we are
          constantly improving it. We are open to any suggestions and we are
          always ready to help you. We hope you enjoy our application.
        </p>
      </Spoiler>
    </div>

  )
}

export default PageInfo