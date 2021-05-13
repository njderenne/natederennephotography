import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import PictureTiles from '../Components/PictureTiles'

function Portrait(props) {

	const {
		categories = [],
		setCurrentCategory,
		currentCategory,
	} = props


	const imageArray = [
		{location: 'Portrait/Tiles/149A7522.jpg'},
		{location: 'Portrait/Tiles/Exercise_3_nate_derenne-5.jpg'},
		{location: 'Portrait/Tiles/Matthew_b_w.jpg'},
		{location: 'Portrait/Tiles/ND0_7898-16.jpg'},
		{location: 'Portrait/Tiles/USMC_Ball_19-4.jpg'},
		{location: 'Portrait/Tiles/Z_and_I.jpg'}
	]

	return (
		<div>
			<header className='hero-portrait' id='hero'>
				<Nav
					categories={categories}
					setCurrentCategory={setCurrentCategory}
					currentCategory={currentCategory}
				></Nav>
				<div className='hero-container'>
					<div className='vertical-center hero-section'>
						<span data-aos='fade-right' className='hero-hi'><h1 data-aos='fade-left' className='hero-name'>Portrait</h1></span>
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

export default Portrait