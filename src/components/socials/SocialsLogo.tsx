import { ActionIcon } from '@mantine/core'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'

export const FacebookLogo = ({ size, color, ...props }: { size?: number, color?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsFacebook size={size} color={color} />
        </ActionIcon>
    )
}

export const InstagramLogo = ({ size, color, ...props }: { size?: number, color?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsInstagram size={size} color={color} />
        </ActionIcon>
    )
}

export const TwitterLogo = ({ size, color, ...props }: { size?: number, color?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsTwitter size={size} color={color} />
        </ActionIcon>
    )
}

export const WhatsAppLogo = ({ size, color, ...props }: { size?: number, color?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsWhatsapp size={size} color={color} />
        </ActionIcon>
    )
}
