import { useState } from 'react'
import './App.css'
// import all images

function Aside() {

  return (
   <aside>
    {/* make this a list label?? */}
        <h2>Summary</h2>
        <ul>
            <li>
              <div>Reaction</div>
              <div>80 / 100</div>
            </li>
            <li>
              <div>Memory</div>
              <div>92 / 100</div>
            </li>
            <li>
              <div>Verbal</div>
              <div>61 / 100</div>
            </li>
            <li>
              <div>Visual</div>
              <div>72 / 100</div>
            </li>
        </ul>
          <a href="#">Continue</a>
   </aside>
  )
}

export default Aside