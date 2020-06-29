import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { PulseLoader } from 'react-spinners'
import { Heart } from './Heart.js'
import './thoughts.css'

export const Thoughts = () => {
  const url = 'https://oh-so-happy-thoughts.herokuapp.com/thoughts'
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setMessages(json.thoughts), setLoading(false))
  }, [])

  const onMessageLiked = (likedMessageId) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === likedMessageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (
    <div>
      {loading ? <PulseLoader color='black' /> :
        messages.map(thought => (
          <article className='thought'>
            <p
              className="thought-text"
              key={thought.id}>
              {thought.message}
            </p>
            <div className='thought-details'>
              <div className='heart-div'>
                < Heart
                  id={thought._id}
                  message={thought.message}
                  onMessageLiked={onMessageLiked}
                  hearts={thought.hearts}
                />
                <p>x</p>
                <p
                  key={thought.id}>
                  {thought.hearts}
                </p>
              </div>
              <div
                className='name-date'>
                <p
                  className='name'
                  key={thought.id}>
                  {thought.name}
                </p>
                <p
                  className='time-stamp'
                  key={thought.id}>
                  {moment(thought.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </article>
        ))
      }
    </div>
  )
}