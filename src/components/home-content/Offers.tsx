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
            <Title className='text-blue-600 dark:text-yellow-500' order={2} underline>Offers</Title>
            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-20 lg:grid-cols-3 xl:grid-cols-4'>
                {offerItems.map((item) => (
                    <Card key={item.id} className='w-42 bg-zinc-200 dark:bg-zinc-800 space-y-5'>
                        <Card.Section>
                            <Image
                                src={item.image}
                                alt={item.title}
                                height={200}
                            />
                        </Card.Section>
                        <Text component='a' href='#' className='font-semibold text-center block hover:underline'>
                            {item.title.toUpperCase()}
                        </Text>
                        <Group position='center'>
                            <Badge variant="outline" color={"gray"} radius={"sm"} className='text-center font-thin tracking-wider line-through font-mono'>
                                S/. {item.oldprice}
                            </Badge>
                            <Divider orientation='vertical' size={"sm"} color="" />
                            <Badge variant="outline" color={dark ? "yellow" : "dark"} size="lg" radius={"sm"} className='text-center font-bold font-mono'>
                                S/. {item.price}
                            </Badge>
                        </Group>
                        <Button fullWidth uppercase variant='filled' leftIcon={<BsFillCartCheckFill size={18} />} className='bg-black hover:bg-zinc-800'>
                            Add to cart
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Offers