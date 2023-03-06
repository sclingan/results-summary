import { useState } from 'react'
import './App.css'
import Aside from './aside'

function App() {

  return (
    <div className="App">
      <main>
        <h1 className='visually-hidden'>Results Page</h1>
        <h2>Your Result</h2>
        <div className='div__score'>
          <p className='p__score'>76</p>
          <p className='p__score_circle'>of 100</p>
        </div>
        <h3>Great</h3>
        <p className='p__score_results'>You scored higher than 65% of the people who have taken these tests.</p>
      </main>
      <Aside/> 
    </div>
  )
}

export default App
