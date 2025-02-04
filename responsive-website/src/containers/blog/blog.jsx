import React from 'react'
import './blog.css';
import article from '../../components/article/article';


const Blog = () => {
  return (
    <div className='whatWS__blog section__padding' id='blog'>
      <div className='whatWS__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it!</h1>
      </div>
      <div className='whatWS__blog-container'>
        <div className='whatWS__blog-container_groupA'>
          <article />
        </div>
        <div className='whatWS__blog-container_groupB'>
          <article />
          <article />
          <article />
          <article />
        </div>
        
      </div>
    </div>
  )
}

export default Blog
