import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/support', label: 'Support' },
]

const activeStyle = 'font-semibold text-blue-500 hover:text-blue-400 dark:text-yellow-400 dark:text-yellow-300 dark:border-yellow-300 border-b-2 border-blue-300'

const linkStyles = 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400'

const LinkMenu = () => {
    return (
        <div className='items-center hidden h-full md:flex'>
            <ul className='items-center h-full space-x-4 md:flex'>
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            isActive ? activeStyle : linkStyles
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default LinkMenu