import React, {useState} from 'react';
import ColorCard from "../molecules/ColorCard";
import AddExtendedColor from "../molecules/AddExtendedColor";
import {addExtendedColor, removeExtendedColor, getColors} from "../../services/Api";
import BtnBase from "../atoms/Button";

const BaseColorRow = ({base, removeGroup}) => {
    const [extendedColors, setExtendedColors] = useState([]);
    const [newExtendedColor, setNewExtendedColor] = useState(0);

    React.useEffect(() => {
        async function fetchExtendedColors() {
            return await getColors(base._id)
        }

        fetchExtendedColors()
            .then((res) => {
                const sortedColors = res.sort((a,b) => a.token - b.token)
                setExtendedColors(sortedColors)
            })
            .catch(e => console.log(e))
    }, [base._id, newExtendedColor]);

    const addNewExtendedColor = async (id, body) => {
        if (body && body.hex && body.token) {
            await addExtendedColor(id, body);
            setNewExtendedColor(newExtendedColor + 1)
        }
    }

    const removeColor = async (id, colorID) => {
        await removeExtendedColor(id, colorID);
        setNewExtendedColor(newExtendedColor - 1)
    }

    const removeBaseGroup = async () => {
        await removeGroup(base._id)
    }

    return(
        <div className='flex items-center flex-wrap py-2 my-3 border-b'>
            <div className='sm:w-full sm:mb-2'>
                <h2 className='w-36'>{base.name}</h2>
                <AddExtendedColor base={base} addColor={addNewExtendedColor}/>
                <BtnBase action={removeBaseGroup} text='- Remove Group' stylingClass='small'/>
            </div>
            {
                extendedColors.map((color, i) => {
                    return (
                        <ColorCard removeColor={removeColor} base={base} color={color} key={i}></ColorCard>
                    )
                })
            }
        </div>
    )
}

export default BaseColorRow