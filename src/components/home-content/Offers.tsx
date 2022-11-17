import React from 'react'
import { Badge, Button, Card, Divider, Group, Image, Text, Title, useMantineColorScheme } from '@mantine/core'
import { BsFillCartCheckFill } from 'react-icons/bs'

const offerItems = [
    {
        id: 1,
        title: "Cartera de cuero",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        price: 100,
        oldprice: 150,
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
    },
    {
        id: 2,
        title: "Bolsa de lona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        price: 50,
        oldprice: 100,
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
    },
    {
        id: 3,
        title: "Bolsa de lona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        price: 25,
        oldprice: 50,
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
    },
    {
        id: 4,
        title: "Bolsa de lona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        price: 90,
        oldprice: 100,
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
    },
]


const Offers = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const dark = colorScheme === 'dark';

    return (
        <div className='container my-20 space-y-10'>
            <Text className='text-black dark:text-white text-3xl font-medium leading-relaxed'>Offers</Text>
            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-20 lg:grid-cols-3 xl:grid-cols-4'>
                {offerItems.map((item) => (
                    <Card key={item.id} className='space-y-5 w-42 bg-zinc-200 dark:bg-zinc-800'>
                        <Card.Section>
                            <Image
                                src={item.image}
                                alt={item.title}
                                height={200}
                            />
                        </Card.Section>
                        <Text component='a' href='#' className='block font-semibold text-center hover:underline'>
                            {item.title.toUpperCase()}
                        </Text>
                        <Group position='center'>
                            <Badge variant="outline" color={"gray"} radius={"sm"} className='font-mono font-thin tracking-wider text-center line-through'>
                                S/. {item.oldprice}
                            </Badge>
                            <Divider orientation='vertical' size={"sm"} color="" />
                            <Badge variant="outline" color={dark ? "yellow" : "dark"} size="lg" radius={"sm"} className='font-mono font-bold text-center'>
                                S/. {item.price}
                            </Badge>
                        </Group>
                        <Button fullWidth uppercase variant='filled' leftIcon={<BsFillCartCheckFill size={18} />} className='bg-black hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-400'>
                            Add to cart
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Offers