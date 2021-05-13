import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

function Home(props) {

    const {
		categories = [],
		setCurrentCategory,
		currentCategory,
	} = props

    return (
        <header className='hero' id='hero'>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <div className='hero-container'>
                {/* <div className='vertical-center hero-section'>
                    <span data-aos='fade-right' className='hero-hi'><h1 data-aos='fade-left' className='hero-name'>Nate Derenne</h1></span>
                    <span className='hero-text' data-aos='fade-right'>- Full-Stack Developer</span>
                </div> */}
                <div className='flex-row socials'>
                    <a href="https://github.com/njderenne" className="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/nathan-derenne-1939801b3/" className="fa fa-linkedin"></a>
                </div>
            </div>
            <div>
                <div>
                    <h2 className="white">Nate Derenne Photography</h2>
                </div>
                <Footer />
            </div>
        </header>
    )

}

export default Home