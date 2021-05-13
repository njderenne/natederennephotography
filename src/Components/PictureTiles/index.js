import { render } from '@testing-library/react'
import React from 'react'

function PictureTiles() {
    const testArray = [
        'Hello0',
        'Hello1',
        'Hello2',
        'Hello3',
        'Hello4',
        'Hello5',
        'Hello6'
    ]

    return(
        <div className="tile-columns">
            {testArray.map((item, i) => {
                    return( 
                        <div>
                            <p className={`white image-${i%3}`}>{item}</p>
                        </div>
                    )
            })}
        </div>

    )
}

export default PictureTiles