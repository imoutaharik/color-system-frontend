import React from 'react';

const Container = ({children, bgColor = ''}) => {
    return(
        <div className={'p-6 ' + bgColor}>
            {children}
        </div>
    )
}

export default Container