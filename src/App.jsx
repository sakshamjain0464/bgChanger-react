import {useState} from 'react'
import "/src/app.css"

export default function App() {
  let [color, setColor] = useState('red')
  return (
    <>
     <div className="main" style={{backgroundColor : color}}>
      <div className="bar">
        <div className="color" id='color1' onClick={() => setColor('red')}>Red</div>
        <div className="color" id='color2' onClick={() => setColor('blue')}>Blue</div>
        <div className="color" id='color3' onClick={() => setColor('green')}>Green</div>
        <div className="color" id='color4' onClick={() => setColor('yellow')}>Yellow</div>
        <div className="color" id='color5' onClick={() => setColor('pink')}>Pink</div>
      </div>
     </div>
    </>
  )
}

