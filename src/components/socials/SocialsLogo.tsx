import { ActionIcon } from '@mantine/core'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'

export const Facebook = ({ size, tw, color, ...props }: { size?: number, color?: string, tw?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsFacebook size={size} color={color} className={`${tw}`} />
        </ActionIcon>
    )
}

export const Instagram = ({ size, tw, color, ...props }: { size?: number, color?: string, tw?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsInstagram size={size} color={color} className={`${tw}`} />
        </ActionIcon>
    )
}

export const Twitter = ({ size, tw, color, ...props }: { size?: number, color?: string, tw?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsTwitter size={size} color={color} className={`${tw}`} />
        </ActionIcon>
    )
}

export const WhatsApp = ({ size, tw, color, ...props }: { size?: number, color?: string, tw?: string }) => {
    return (
        <ActionIcon {...props} variant="transparent" radius='xl'>
            <BsWhatsapp size={size} color={color} className={`${tw}`} />
        </ActionIcon>
    )
}
