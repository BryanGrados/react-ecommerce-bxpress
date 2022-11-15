import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

const Support = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant='outline'
            color={dark ? 'gray' : 'dark'}
            title="Support"
            className={'border-1 border-gray-500 hidden md:flex'}
        >
            <TfiHeadphoneAlt />
        </ActionIcon>
    )
}

export default Support