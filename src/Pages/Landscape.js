import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import PictureTiles from '../Components/PictureTiles'


function Landscape(props) {

    const {
		categories = [],
		setCurrentCategory,
		currentCategory,
	} = props

    const imageArray = [
        {location: 'Landscape/Tiles/IMG_4770.png'},
        {location: 'Landscape/Tiles/IMG_5329.jpg'},
        {location: 'Landscape/Tiles/IMG_5507.jpg'},
        {location: 'Landscape/Tiles/West_19-6.jpg'},
        {location: 'Landscape/Tiles/West_19-7.jpg'},
        {location: 'Landscape/Tiles/West_19-17.jpg'}
    ]

    return (
        <div>
            <header className='hero-landscape' id='hero'>
                <Nav
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                ></Nav>
                <div className='hero-container'>
                    <div className='vertical-center hero-section'>
                        <span data-aos='fade-right' className='hero-hi'><h1 data-aos='fade-left' className='hero-name'>Landscape</h1></span>
                        <span className='hero-text' data-aos='fade-right'>- Nate Derenne Photography</span>
                    </div>
                    <div className='flex-row socials'>
                        <a href="https://github.com/njderenne" className="fa fa-github"></a>
                        <a href="https://www.linkedin.com/in/nathan-derenne-1939801b3/" className="fa fa-linkedin"></a>
                    </div>
                    <i className='arrow down'></i>
                </div>
            </header>
            <PictureTiles
                imageArray={imageArray}
            />
            <Footer />
        </div>
    )

}

export default Landscape