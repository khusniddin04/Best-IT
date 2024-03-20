import React from 'react'
import Hero from '../components/Hero'
import Tablitsa from '../components/Tablitsa'


function HomePage() {
  return (
    <div className='App'>
      <form >
        <input type="text" placeholder='Qididrish...'/>
      </form>
      <Hero/>
      <Tablitsa/>
    </div>
  )
}

export default HomePage