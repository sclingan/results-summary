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
              <div className='div__reaction results'><img src={reaction}></img>
                <p>Reaction</p>
                <span>80 / 100</span>
              </div>
            </li>
            <li>
              <div className='div__memory results'><img src={memory}></img>
                <p>Memory</p>
                <span>92 / 100</span>
              </div>
            </li>
            <li>
              <div className='div__verbal results'><img src={verbal}></img>
                <p>Verbal</p>
                <span>61 / 100</span>
                </div>
            </li>
            <li>
              <div className='div__visual results'><img src={visual}></img>
                <p>Visual</p>
                <span>72 / 100</span>
                </div>
            </li>
        </ul>
          <a href="#">Continue</a>
   </aside>
  )
}

export default Aside