import React from "react"
import ReactDOM from "react-dom"
//Creating a function to add to the render. The function only accept 1 element unless we wrap in a div
function MyApp() {
  return (
    <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ol>
      <li>Jesus</li>
      <li>Maria</li>
      <li>Jose</li>
    </ol>
    </div>
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)