import React from "react";
import { GoCheck, GoTrashcan } from "react-icons/go";
import './styles.css'

const iconTypes = {
    'check': color => (
        <GoCheck className="Icon-svg Icon-svg--check" fill={color} />
    ),
    'delete': color => (
        <GoTrashcan className="Icon-svg Icon-svg--delete" fill={color} />
    )
}

function TodoIcon({ type, color = 'gray', onClick }){
    <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
}

export { TodoIcon }