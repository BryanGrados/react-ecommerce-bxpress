import * as Data from './data'
import * as Logo from '../socials/SocialsLogo'
import { Group, Text, Textarea, Title } from '@mantine/core'
import { FooterSectionMobile, FooterSectionDesktop } from './Sections'

const Footer = () => {

    return (
        <footer className='flex flex-col text-white min-h-52 bg-[#0e0d0d]'>
            <div className='container flex items-center justify-between h-full py-5 md:items-stretch md:space-x-20'>
                <div className='w-44 md:w-max space-y-5'>
                    <Title weight={500} className="text-2xl">
                        Bxpress
                    </Title>
                    <Text className='text-sm text-zinc-300'>
                        Online clothing store with the latest fashion trends.
                    </Text>
                    <Text className='text-sm text-zinc-300'>
                        1234 Street Name, Lima, Peru
                    </Text>
                </div>
                <FooterSectionDesktop />
                <FooterSectionMobile />
            </div>
            <div className='h-20 bg-black'>
                <div className='container h-full'>
                    <div className='flex flex-col items-center justify-between w-full h-full p-2 space-y-5 text-sm sm:flex-row sm:text-md sm:p-0 sm:space-y-0 md:text-md'>
                        <Text>
                            &copy; 2021 - 2022 Bxpress Inc. All rights reserved.
                        </Text>
                        <Group position='center'>
                            <Logo.Facebook color='white' tw='text-md md:text-lg' />
                            <Logo.Instagram color='white' tw='text-md md:text-lg' />
                            <Logo.Twitter color='white' tw='text-md md:text-lg' />
                            <Logo.WhatsApp color='white' tw='text-md md:text-lg' />
                        </Group>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer