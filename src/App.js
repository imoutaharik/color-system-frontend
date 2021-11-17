import React, {useState} from "react";
import Container from "./components/base/Container";
import AddBaseColorCta from "./components/molecules/AddBaseColorCta";
import BaseColorRow from "./components/organisms/BaseColorRow";
import {addBaseColor, getBaseColors, removeBaseColor} from "./services/Api";

function App() {
    const [baseColors, setBaseColors] = React.useState(null);
    const [newColor, setNewColor] = React.useState(0);
    const [text, setText] = useState('');
    const [error, setError] = useState(false);

    React.useEffect(() => {
        async function fetchColorsData() {
            return await getBaseColors();
        }
        fetchColorsData()
            .then((res) => {
                setBaseColors(res)
            })
            .catch(e => console.log(e))
    }, [newColor]);

    if (!baseColors) return null;

    const onInputChange = (event) => {
        setText(event.target.value);
    }

    const addNewBaseColor = async () => {
        if (text.length) {
            await addBaseColor(text);
            setNewColor(newColor + 1)
        }
        setError(true)
    }

    const removeColor = async (id) => {
        await removeBaseColor(id);
        setNewColor(newColor - 1)
    }


  return (
    <div>
      <Container bgColor='bg-white'>
          <h1 className='font-mono text-xl m-8'>Color System</h1>
          <AddBaseColorCta error={error} onInputChange={onInputChange} onSubmit={addNewBaseColor}/>
      </Container>
        <Container>
            {
                baseColors.map((base, i) => {
                    return (<BaseColorRow removeGroup={removeColor} base={base} key={i}></BaseColorRow>)
                })
            }
        </Container>
    </div>
  );
}

export default App;
