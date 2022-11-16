import { Card, Text, ScrollArea, Divider, Image, Group, Badge, useMantineColorScheme, Title } from '@mantine/core'

const items = [
    {
        title: 'Men',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.',
        discount: 20
    },
    {
        title: 'Women',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.',
        discount: 15
    },
    {
        title: 'Kids',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.',
        discount: 40
    },
    {
        title: 'Accessories',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.',
        discount: 77
    },
    {
        title: 'Shoes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.',
        discount: 5
    },
    {
        title: 'Bags',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet nisl.',
        discount: 12
    },
]

const Categories = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const dark = 'dark' === colorScheme;

    return (
        <div id='categories' className='container my-20 space-y-10'>
            <Title className='text-black dark:text-yellow-500' order={2} underline>Categories</Title>
            <ScrollArea className='mx-auto w-full h-96 sm:w-full sm:h-[400px]'>
                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-20 lg:grid-cols-3'>
                    {items.map((item, index) => (
                        <Card component='a' href='#' key={index} className='h-96 bg-zinc-100 dark:bg-zinc-800'>
                            <Card.Section>
                                <Image
                                    src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
                                    alt='Image'
                                    height={200}
                                />
                            </Card.Section>
                            <Group position='apart' my={10}>
                                <Text size='xl' weight={500}>
                                    {item.title}
                                </Text>
                                <Badge variant='dot' color={dark ? 'yellow' : 'blue'}>Discount {item.discount}%</Badge>
                            </Group>
                            <Divider my={10} />
                            <Text className='text-justify text-sm overflow-auto'>
                                {item.description}
                            </Text>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default Categories