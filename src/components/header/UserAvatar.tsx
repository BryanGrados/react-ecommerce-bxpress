import React from 'react'
import { ActionIcon, Avatar } from '@mantine/core'
import { FiUser } from 'react-icons/fi'
import { useMantineColorScheme } from '@mantine/core'

const UserAvatar = () => {


    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant='outline'
            color={dark ? 'gray' : 'dark'}
            title="User avatar"
            className='hidden border-gray-500 border-1 md:flex'
        >
            <FiUser />
        </ActionIcon>
    )
}

export default UserAvatar;