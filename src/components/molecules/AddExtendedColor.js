import React, {useState} from 'react';
import BtnBase from "../atoms/Button";
import Input from "../atoms/Input";

const AddExtendedColor = ({addColor, base}) => {
    const [show, setShow] = useState(false);
    const [hex, setHex] = useState('');
    const [token, setToken] = useState('');

    const toggleColorPicker = () => {
        setShow(!show)
    }

    const getColorValue = (event) => {
        setHex(event.target.value)
    }

    const getTokenValue = (event) => {
        setToken(event.target.value)
    }

    const saveNewColor = async () => {
        const body = {
            hex: hex,
            token: token
        }
        await addColor(base._id, body)
        toggleColorPicker()
    }

    return(
        <div>
            {
                show ? (
                <div>
                    <div>
                        <input onChange={getColorValue} type="color"/>
                        <span>Hex: {hex}</span>
                    </div>
                    <div>
                        <small>Token:</small>
                        <Input onChange={getTokenValue} placeholder='ex: 60, 70, 80'/>
                    </div>
                </div>
                ) : null
            }
            {
                show ? (
                    <div>
                        <BtnBase action={saveNewColor} text='Submit' stylingClass='small'/>
                        <BtnBase action={toggleColorPicker} text='Cancel' stylingClass='small'/>
                    </div>
                ):(
                <BtnBase action={toggleColorPicker} text='+ Add Color' stylingClass='small'/>
                )
            }

        </div>
    )
}

export default AddExtendedColor