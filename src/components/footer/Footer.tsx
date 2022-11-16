import { Group, Text } from '@mantine/core'
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsAppLogo } from '../socials/SocialsLogo'

const Footer = () => {
    return (
        <div className='h-52 flex flex-col bg-zinc-900 text-white'>
            <div className='container h-full border'>
                Upper
            </div>
            <div className='h-20 bg-black'>
                <div className='container flex items-center justify-between h-full'>
                    <Text>
                        &copy; 2021 - 2022 Bxpress Inc. All rights reserved.
                    </Text>
                    <Group position='center'>
                        <FacebookLogo size={20} color='gray' />
                        <InstagramLogo size={20} color='gray' />
                        <TwitterLogo size={20} color='gray' />
                        <WhatsAppLogo size={20} color='gray' />
                    </Group>
                </div>
            </div>
        </div>
    )
}

export default Footer