import { ColorScheme, ColorSchemeProvider, MantineProvider, Text } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {


    const getScreenSize = () => {
        return window.innerWidth
    }

    const [screenSize, setScreenSize] = useState(getScreenSize())

    useEffect(() => {
        const handleResize = () => setScreenSize(getScreenSize())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // 

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    })

    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));
    }

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    useEffect(() => {
        document.documentElement.classList.add(colorScheme === 'light' ? 'light' : 'dark');
        document.documentElement.classList.remove(colorScheme === 'light' ? 'dark' : 'light');
    }, [colorScheme]);

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <Text size='xl' weight={700} className='text-center text-black dark:text-yellow-400 z-50 fixed bottom-0 right-0'>
                    {screenSize < 640 ? 'Mobile' :
                        screenSize < 768 ? 'Tablet sm' :
                            screenSize < 1024 ? 'Laptop md' :
                                screenSize < 1280 ? 'Desktop lg' :
                                    screenSize < 1536 ? 'Large Desktop xl' :
                                        'Extra Large Desktop 2xl'
                    }
                </Text>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App;