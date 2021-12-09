import React from 'react';

const AbsoluteWrapper = ({ children, id }) => {
    console.log('id', id)
    return(
    <div id={id} className="position-absolute">
        {children}
    </div>
    )
}

export default AbsoluteWrapper;