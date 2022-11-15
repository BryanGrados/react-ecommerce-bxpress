import { ActionIcon, Button, Paper, Text } from "@mantine/core"
import { AiOutlineDropbox, AiFillDownCircle } from 'react-icons/ai'

const Landing = () => {
    return (
        <div className='relative h-screen'>
            <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-screen space-y-10 bg-gradient-to-b from-zinc-800/70 to-zinc-700/70'>
                <div className="absolute flex flex-col items-center justify-center md:justify-around md:w-full md:flex-row p-5">
                    <div className="flex-col items-start hidden space-y-5 md:flex">
                        <h2 className='text-4xl font-extrabold text-white'>For you</h2>
                        <h2 className='text-4xl font-extrabold text-white'>The Best Prices</h2>
                        <Button className="bg-teal-700 dark:bg-zinc-900 hover:bg-teal-800 dark:hover:bg-zinc-800" variant='filled' size='lg'>Shop Now</Button>
                    </div>
                    <div className="flex flex-col items-center md:hidden">
                        <h2 className='font-extrabold text-white text-7xl md:text-2xl'>Fast</h2>
                        <h2 className='font-extrabold text-white text-7xl md:text-2xl'>and</h2>
                        <h2 className='font-extrabold text-white text-7xl md:text-2xl'>easy</h2>
                    </div>
                    <Button className='h-16 mt-20 text-lg font-bold text-white bg-zinc-900/90 md:text-xl md:h-20 hover:bg-zinc-800 md:mt-0'>
                        <AiOutlineDropbox className='w-8 h-8 mr-5 md:w-10 md:h-10' color="#BB8E51" />
                        Track now your products!
                    </Button>
                </div>
                <div className='absolute flex flex-col items-center justify-center bottom-5'>
                    <ActionIcon
                        component="a"
                        href="#asd"
                        variant="transparent"
                        className="w-auto h-auto animate-bounce-slow"
                    >
                        <AiFillDownCircle size={40} color="white" />
                    </ActionIcon>
                </div>
            </div>
            <picture>
                <source srcSet='assets\landing\bg-landing.webp' type='image/webp' />
                <source srcSet='assets\landing\bg-landing.jpg' type='image/jpeg' />
                <img src='assets\landing\bg-landing.jpg' alt='Landing' width='100%' height='100%' className='object-cover w-full h-full' />
            </picture>
        </div>
    )
}

export default Landing