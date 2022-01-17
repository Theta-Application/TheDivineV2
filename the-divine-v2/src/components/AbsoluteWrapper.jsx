import React from 'react';

const AbsoluteWrapper = ({ children, id }) => {
    return(
    <div id={id} className="position-absolute">
        {children}
    </div>
    )
}

export default AbsoluteWrapper;