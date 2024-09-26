import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  
  useEffect(() => {
    console.log('effect', {enabled})
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    //cleanup del evento
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
    <div style={{
      position: 'absolute',
      border: 'solid 1px #FFF',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
    }
    }/>
    <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {
  return (
    <>
      <FollowMouse/>
    </>
  )
}

export default App
