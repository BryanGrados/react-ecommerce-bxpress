import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { FiSun, FiMoon } from 'react-icons/fi'

const SchemeSwitcher = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant='outline'
            color={dark ? 'gray' : 'dark'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            className='border-1 border-gray-500'
        >
            {dark ? <FiSun /> : <FiMoon />}
        </ActionIcon>
    )
}

export default SchemeSwitcher