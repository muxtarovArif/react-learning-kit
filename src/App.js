import './App.css';
import React from "react";
import PropTypes from "prop-types"

const Welcome = (props) =>{
    return(
        <div>
            <p>Hello, <strong>{props.name}</strong></p>
        </div>
    )
}

const List = (props) =>{
    return(
        <p>{props.tasks.join(', ')}</p>
    );
}

List.propTypes = {tasks: PropTypes.array.isRequired}

const JSX = () =>{
    return(
        <>
            <List tasks={["walk dog", "workout"]} />
            <h1 className="text-amber-600">Hello JSX!</h1>
            <Welcome name="Jessica"/>
        </>
    );
};


export default JSX;
