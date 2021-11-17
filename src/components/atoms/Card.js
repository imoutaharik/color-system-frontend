import React from 'react';

const Card = ({children, bgColor}) => {
    return(
        <div className='p-6' style={{backgroundColor: bgColor}}>
            {children}
        </div>
    )
}

export default Card