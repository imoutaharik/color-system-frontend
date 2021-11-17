import React from 'react';
import Card from "../atoms/Card";

const ColorCard = ({base, color, removeColor}) => {
    const removeOne = async () => {
        await removeColor(base._id, color._id)
    }

    return(
        <div className='text-gray-500 text-xs w-36 relative shadow-md'>
            <img onClick={removeOne} className='absolute top-1 right-1 w-4 cursor-pointer' src="./icon-delete.svg" alt="Delete"/>
            <Card bgColor={color.hex}/>
            <div className='p-2'>
                <p>{`${base.name}-${color.token}`}</p>
                <p>{color.hex}</p>
            </div>
        </div>
    )
}

export default ColorCard