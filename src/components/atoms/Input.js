import React from 'react';

const Input = ({onChange, error, placeholder = ''}) => {
    return (
        <div>
            <input onChange={onChange} className={'mr-3 px-2 border border-blue-600 focus:outline-none sm:my-2'} type="text" placeholder={placeholder}/>
            {
                error ? <small>* Required</small> : null
            }
        </div>
    )
}

export default Input