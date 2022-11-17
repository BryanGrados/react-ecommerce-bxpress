import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Content from '../components/home-content/Content'
import Landing from '../components/landing/Landing'
import Services from '../components/services/Services'
import Subscribe from '../components/subscribe/Subscribe'

const Home = () => {


    return (
        <>
            <Landing />
            <Header />
            <Content />
            <Services />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Home