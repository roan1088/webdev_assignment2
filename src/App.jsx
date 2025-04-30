import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const colors = ["red", "green", "blue", "orange", "purple"];

  const changeColor = () => {
    setIndex((index + 1) % colors.length);
  }

  useEffect(() => {
    document.body.style.backgroundColor = colors[index];
  })

  return (
    <>
      <h1>Current color is {colors[index]}</h1>
      <div className="card">
        <button onClick={changeColor}>
          Click to change color
        </button>
        <p>
          Colors: red, green, blue, orange and purple
        </p>
      </div>
    </>
  )
}

export default App
