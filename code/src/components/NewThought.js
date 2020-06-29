import React, { useState } from 'react'
import './thoughts.css'
import './new-thought.css'

export const NewThought = () => {
  const url = 'https://oh-so-happy-thoughts.herokuapp.com/thoughts'
  const [message, setMessage] = useState('')


  const handleSubmit = event => {
    event.preventDefault()

    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message,
        })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form
      className='thought new-thought'
      onSubmit={handleSubmit}>
      <div
        className='form-inputs'>
        <h2>Share your happy thoughts with the world!</h2>
        <textarea
          type='text'
          maxLength="140"
          onChange={event => setMessage(event.target.value)}
          className='form-textarea'>
        </textarea>
      </div>
      <div className='button-count'>
        <input
          type='submit'
          className='form-button'
          disabled={message.length <= 5 || message.length >= 140 ? true : false}
          value='❤️Send Happy Thought❤️'>
        </input>
        <p>{message.length}/140</p>
      </div>
    </form>
  )
}