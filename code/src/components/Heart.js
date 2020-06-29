import React from 'react'
import './heart.css'

export const Heart = (props) => {
  const heartUrl = `https://oh-so-happy-thoughts.herokuapp.com/${props.id}/like`
  
  const handleHeart = () => {

    fetch(heartUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }).then(() => {
        props.onMessageLiked(props.id)
      })
  }

  return (
    < button
      className={props.hearts > 0 ? 'liked' : 'unliked'}
      className='heart-button'
      onClick={handleHeart}
    >
      <span role='img' aria-label='heart'>
        {'❤️'}
      </span>
    </button >
  )
}