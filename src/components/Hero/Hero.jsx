import './hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="heroContainer">
                <h1 className="heroH1">
                    Adventure Awaits.
                </h1>
                <p className="heroP">
                    So much is yet to be discovered!
                </p>
                <div className="btnContainer">
                    <button className="btnLarge">
                        Sign Up
                    </button>
                    <button className="btnLarge">
                        Download App
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;