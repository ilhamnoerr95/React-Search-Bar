// import React, {useState} from 'react'
import * as React from 'react'
import './CountButton.css'
// PROPS ITU ISINYA OBJEK

const CountButton = (props)=>{
    // useState(0) => defaultValue 
    // console.log(props)
    // USESTATE
let [currentCount, setCurrentCount] = React.useState(0)

const handleClick =()=>{
    setCurrentCount(currentCount + props.props)
    
}

    const divStyle = {
        color: "red"
    }
    const buttonStyle = {
        backgroundColor: props.warna,
        borderRadius: '10px'
    }

    // TODO: USE EFFECT
    React.useEffect(()=>{
        console.log(currentCount)
    if(currentCount === 10) {
        // alert("the count is 10")
        setCurrentCount(0)
    }
    },[currentCount])

    
console.log("component re-rendered")

    return (
    <div style={divStyle}>
        <button style={buttonStyle} onClick={handleClick}>+{props.props}</button>
        <div className={'count-display'}>{currentCount}</div>
    </div>
    )
}

export default CountButton;

