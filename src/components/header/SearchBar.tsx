import React, { forwardRef, useEffect, useState } from 'react'
import { Autocomplete, SelectItemProps } from '@mantine/core'
import { FiSearch } from 'react-icons/fi'
import { Link, Navigate } from 'react-router-dom'

const autoCompleteData = [
    { value: 'For men', link: '/men' },
    { value: 'For woman', link: '/women' },
    { value: 'For kids', link: '/kids' },
    { value: 'Accesories', link: '/accesories' },
    { value: 'Shoes', link: '/shoes' },
]

interface ItemProps extends SelectItemProps {
    link: string
}

const autoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ link, value }: ItemProps, ref) => {
        return (
            <Link to={link} className='p-2 text-sm hover:bg-gray-200 dark:hover:bg-zinc-700'>
                {value}
            </Link>
        )
    }
)

const SearchBar = () => {

    return (
        <Autocomplete
            className='hidden md:block md:w-1/6 lg:w-1/3'
            aria-label='Search'
            placeholder='Try searching some products'
            radius={'md'}
            itemComponent={autoCompleteItem}
            data={autoCompleteData}
            icon={<FiSearch />}
            transition="scale-y"
            transitionDuration={100}
            transitionTimingFunction='ease-in-out'
        />
    )
}

export default SearchBar