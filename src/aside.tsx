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
              <div className='div__reaction'><p>Reaction
              <span>80 / 100</span></p>
              </div>
              {/* <div>80 / 100</div> */}
            </li>
            <li>
              <div className='div__memory'><p>Memory
                <span>92 / 100</span></p>
              </div>
            </li>
            <li>
              <div className='div__verbal'><p>Verbal
                <span>61 / 100</span></p>
                </div>
            </li>
            <li>
              <div className='div__visual'><p>Visual
                <span>72 / 100</span></p>
                </div>
            </li>
        </ul>
          <a href="#">Continue</a>
   </aside>
  )
}

export default Aside