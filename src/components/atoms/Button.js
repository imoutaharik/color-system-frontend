import React from 'react';

const styles = {
    primary: ' mx-1 px-8 text-base text-white bg-blue-700 hover:bg-blue-800 focus:border-blue-900 ',
    secondary: ' mx-1 px-8 text-base text-blue-600 bg-white border border-blue-600 hover:border-blue-900 focus:border-blue-900 ',
    small: ' text-xs text-blue-600 mx-2'
};

const BtnBase = ({ action, stylingClass, text, disabled }) => {
    return (
        <button onClick={action} className={'focus:outline-none focus:shadow-focus hover:shadow-lg'
        + (disabled === true ? ' pointer-events-none text-gray-300 bg-gray-200 mx-1 py-2 px-8 ' : styles[stylingClass])}>
            {text}
        </button>
    )
}

export default BtnBase