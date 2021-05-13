import { render } from '@testing-library/react'
import React from 'react'

function PictureTiles(props) {
    const {imageArray} = props

    return(
        <div className="tile-columns">
            {imageArray.map((image, i) => {
                    return( 
                        <div>
                            <img 
                            src={require(`../../Assests/${image.location}`).default} 
                            className={`tile-image image-${i%3}`}
                            // alt={project.title}
                            // onClick={() => toggleModal(project, i)}
                            key={i}
                        />
                            {/* <p className={`white image-${i%3}`}>{item}</p> */}
                        </div>
                    )
            })}
        </div>

    )
}

export default PictureTiles