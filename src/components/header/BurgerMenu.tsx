import React from 'react'
import { useState } from 'react'
import { Burger } from '@mantine/core'

const BurgerMenu = () => {

    const [opened, setOpened] = useState(false)
    const title = opened ? 'Close menu' : 'Open menu'

    return (
        <Burger
            className={'md:hidden'}
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
            size='sm'
        />
    )
}

export default BurgerMenu