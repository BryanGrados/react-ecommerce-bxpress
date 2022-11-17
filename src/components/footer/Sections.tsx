import { MantineProvider, NavLink, Text, Title } from "@mantine/core"
import { IoShareSocialSharp } from 'react-icons/io5'
import { AiFillHome } from 'react-icons/ai'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { GiBookCover } from 'react-icons/gi'
import { BiSupport } from 'react-icons/bi'
import * as Data from './data'
import { Link } from "react-router-dom"


const navLinkStyle = {
    components: {
        NavLink: {
            styles: () => ({
                root: {
                    ':hover': {
                        backgroundColor: '#27272A',
                    },
                    padding: '0.5rem 0',
                },
                body: {
                    color: '#fff',
                },
                icon: {
                    color: '#fff',
                },
                rightSection: {
                    color: '#fff',
                },
            }),
        }
    }
}

export const FooterSectionMobile = () => {
    return (
        <MantineProvider theme={navLinkStyle}>
            <div className="flex flex-col md:hidden w-44">
                {
                    Data.footerCat.categories.map((category, index) => (
                        <NavLink key={index} label={category.title} childrenOffset={0}>
                            {
                                category.items.map((item, index) => (
                                    <Link to={item.url} key={index}>
                                        <NavLink
                                            key={index}
                                            label={item.name}
                                            icon={<VscDebugBreakpointLog size={10} />}
                                            styles={{
                                                label: {
                                                    fontSize: '14px',
                                                    fontWeight: 100,
                                                }
                                            }}
                                        />
                                    </Link>
                                ))
                            }
                        </NavLink>
                    ))
                }
            </div>
        </MantineProvider>
    )
}

export const FooterSectionDesktop = () => {
    return (
        <div className="md:flex justify-between hidden w-full">
            {
                Data.footerCat.categories.map((category, index) => (
                    <div key={index} className="flex-col hidden space-y-5 md:flex">
                        <Text weight={500} className="md:text-md lg:text-lg">
                            {category.title}
                        </Text>
                        <ul className="space-y-2 text-sm">
                            {
                                category.items.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.url} className="hover:text-gray-500">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}