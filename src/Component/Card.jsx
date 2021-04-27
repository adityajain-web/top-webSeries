import React from 'react';
import './Card.css';

const Card = (props) => {
    return (<>
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.imgSrc} alt={`${props.sName} Poster`} className="card-img-top" />
            <div className="card-body">
                <h5>{props.title}</h5>
                <h2>{props.sName}</h2>
                <a href={props.link} target="blank" ><button>Watch Now</button></a>
            </div>
        </div>
    </>)
}

export default Card;