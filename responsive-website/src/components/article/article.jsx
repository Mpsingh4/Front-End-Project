import React from 'react'
import './article.css';

const article = ({ imgUrl }) => {
  return (
    <div className='whatWS__blog-container_article'>
      <div className='whatWS__blog-container_article-image'>
        <img src={imgUrl} alt='blog image' />
      </div>
    </div>
  )
}

export default article
