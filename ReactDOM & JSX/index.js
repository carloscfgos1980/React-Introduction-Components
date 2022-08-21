import React from "react"
import ReactDOM from "react-dom"

// JSX

// ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)
// to place more than one element, they have to be wrap in a div
ReactDOM.render(<div><h1>
    fucking hell</h1><p>This is a paragraph</p></div>, document.getElementById("root"))


// It is the same as above the longer code typing without using frameworks
var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph."