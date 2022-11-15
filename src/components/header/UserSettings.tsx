import React from 'react'
import UserAvatar from './UserAvatar'
import ShoppingCart from './ShoppingCart'
import Support from './Support'
import SchemeSwitcher from '../SchemeSwitcher'

const UserSettings = () => {
    return (
        <div className='flex items-center justify-center h-full md:space-x-2'>
            <UserAvatar />
            <ShoppingCart />
            <Support />
            <SchemeSwitcher />
        </div>
    )
}

export default UserSettings