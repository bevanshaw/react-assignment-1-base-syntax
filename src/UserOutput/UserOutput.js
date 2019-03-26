import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return (
        <div className="UserOutput">
            <p>Hello my name is {props.userName}</p>
            <p onClick={props.click}>My favourite food is {props.favFood}</p>
        </div>
    );
};

export default userOutput;