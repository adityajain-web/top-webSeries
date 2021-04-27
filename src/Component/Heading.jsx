import React from 'react';
import './Heading.css';

const Heading = (props) => {
    return (<>
        <header>
            <h1>{`Top ${props.ott} series in 2020`}</h1>
        </header>
    </>)
}

export default Heading;