import { useState } from 'react'
import reactLogo from './assets/react.svg'
import waves from './assets/waves.svg'
function App() {

  return (
    <div className="h-screen grid grid-cols-12 relative overflow-hidden">
      <img className='absolute -bottom-20' src={waves} alt="waves" />
      <div className='col-start-5 flex content-center items-center h-1/2'>
        <h2>Log In</h2>
      </div>

    </div>
  )
}

export default App
