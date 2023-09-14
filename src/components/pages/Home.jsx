import './home.css';
import Hero from '../Hero/Hero';
import Destinations from '../Destinations/Destinations';
import Team from '../Team/Team';

const Home = () => {
    return (
        <main className='home' id='home'>
            <Hero />
            <Destinations />
            <Team />
        </main>
    )
}

export default Home