import BurgerMenu from './BurgerMenu'
import BrandLogo from './BrandLogo'
import LinkMenu from './LinkMenu'
import UserSettings from './UserSettings'
import SearchBar from './SearchBar'

const Header = () => {

    return (
        <nav className={`z-50 sticky top-0 left-0 right-0 flex items-center w-full h-20 bg-slate-100/10 dark:bg-zinc-900/40 backdrop-blur-md drop-shadow-lg ring-1 ring-slate-900/10 dark:ring-black/10`}>
            <header className='container flex items-center justify-between w-full h-full'>
                <BurgerMenu />
                <BrandLogo />
                <SearchBar />
                <LinkMenu />
                <UserSettings />
            </header>
        </nav>
    )
}

export default Header