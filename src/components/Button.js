import React from 'react';
import './Button.css';


export default function Button(props) {
    const { text, cName, onClick } =props;
    return (
        <button onClick={onClick} className={cName}>{text}</button>
    )
}