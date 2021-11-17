import React from 'react';
import Container from "../base/Container";
import BtnBase from "../atoms/Button";
import Input from "../atoms/Input";

const AddBaseColorCta = ({onSubmit, onInputChange, error}) => {

    return(
        <Container>
            <h2>Add a new Color group</h2>
            <div className="flex justify-start sm:flex-col">
                <Input placeholder='ex: Primary, Secondary' onChange={onInputChange}/>
                <BtnBase action={onSubmit} error={error} stylingClass='primary' text='Add Base Color'></BtnBase>
            </div>
        </Container>
    )
}

export default AddBaseColorCta