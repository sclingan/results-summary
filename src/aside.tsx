import { useState } from 'react'
import './App.css'
import data from '../src/assets/data.json'
// import all images
import reaction from '../public/icon-reaction.svg'
import memory from '../public/icon-memory.svg'
import verbal from '../public/icon-verbal.svg'
import visual from '../public/icon-visual.svg'

function Aside() {
  const Reaction = data[0].score;
  const Memory = data[1].score;
  const Verbal = data[2].score;
  const Visual = data[3].score;
  return (
   <aside>
    {/* make this a list label?? */}
        <h2>Summary</h2>
        <ul>
            <li>
              <div className='div__reaction results'><img src={reaction} alt=""></img>
                <p>Reaction</p>
                <span>{Reaction} / 100</span>
              </div>
            </li>
            <li>
              <div className='div__memory results'><img src={memory} alt=""></img>
                <p>Memory</p>
                <span>{Memory} / 100</span>
              </div>
            </li>
            <li>
              <div className='div__verbal results'><img src={verbal} alt=""></img>
                <p>Verbal</p>
                <span>{Verbal} / 100</span>
                </div>
            </li>
            <li>
              <div className='div__visual results'><img src={visual} alt=""></img>
                <p>Visual</p>
                <span>{Visual} / 100</span>
                </div>
            </li>
        </ul>
          <a className='button__continue' href="#">Continue</a>
   </aside>
  )
}

export default Aside