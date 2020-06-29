  
import React from 'react'
import { NewThought } from './components/NewThought.js'
import { Thoughts } from './components/Thoughts.js'
import './app.css'

export const App = () => {

  return (
    <div className='app-container'>
      <NewThought />
      <Thoughts />
    </div>
  )
}
