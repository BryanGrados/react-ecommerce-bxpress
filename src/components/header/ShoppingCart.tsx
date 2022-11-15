import React from 'react'
import { useMantineColorScheme } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { FiShoppingCart } from 'react-icons/fi'

const ShoppingCart = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant='outline'
            color={dark ? 'gray' : 'dark'}
            title="Shopping cart"
            className={'border-1 border-gray-500 hidden md:flex'}
        >
            <FiShoppingCart />
        </ActionIcon>
    )
}

export default ShoppingCart