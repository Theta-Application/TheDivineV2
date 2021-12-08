import React from 'react';

const AbsoluteWrapper = ({ children, id }) => {
    console.log('id', id)
    return(
    <div id={id === "home" ? "home" : "null"} className="position-absolute">
        {children}
    </div>
    )
}

export default AbsoluteWrapper;