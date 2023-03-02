import { useState } from 'react'
import './App.css'
import Aside from './aside'

function App() {

  return (
    //App is the card
    <div className="App">
      <main>
        {/* hidden h1 for accessibility */}
        <h2>Your Result</h2>
        <div className='div--score'>
          <p>76</p>
          <p>of 100</p>
        </div>
        <h3>Great</h3>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </main>
      <Aside/> 
    </div>
  )
}

export default App
