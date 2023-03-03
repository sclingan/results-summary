import { useState } from 'react'
import './App.css'
// import all images
import reaction from '../public/icon-reaction.svg'
import memory from '../public/icon-memory.svg'
import verbal from '../public/icon-verbal.svg'
import visual from '../public/icon-visual.svg'

function Aside() {

  return (
   <aside>
    {/* make this a list label?? */}
        <h2>Summary</h2>
        <ul>
            <li>
              <div className='div__reaction'><img src={reaction}></img>
                <p>Reaction
                <span>80 / 100</span></p>
              </div>
            </li>
            <li>
              <div className='div__memory'><img src={memory}></img>
                <p>Memory
                <span>92 / 100</span></p>
              </div>
            </li>
            <li>
              <div className='div__verbal'><img src={verbal}></img>
                <p>Verbal
                <span>61 / 100</span></p>
                </div>
            </li>
            <li>
              <div className='div__visual'><img src={visual}></img>
                <p>Visual
                <span>72 / 100</span></p>
                </div>
            </li>
        </ul>
          <a href="#">Continue</a>
   </aside>
  )
}

export default Aside