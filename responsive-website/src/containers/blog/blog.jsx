import React from 'react'
import './blog.css';
import Article from '../../components/article/article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='whatWS__blog section__padding' id='blog'>
      <div className='whatWS__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it!</h1>
      </div>
      <div className='whatWS__blog-container'>
        <div className='whatWS__blog-container_groupA'>
          <Article imgUrl={blog01} date='Feb 4, 2025' title='AI is the future, Lets explore it.' />
        </div>
        <div className='whatWS__blog-container_groupB'>
        <Article imgUrl={blog02} date='Feb 4, 2025' title='AI is the future, Lets explore it.' />
        <Article imgUrl={blog03} date='Feb 4, 2025' title='AI is the future, Lets explore it.' />
        <Article imgUrl={blog04} date='Feb 4, 2025' title='AI is the future, Lets explore it.' />
        <Article imgUrl={blog05} date='Feb 4, 2025' title='AI is the future, Lets explore it.' />
        </div>
        
      </div>
    </div>
  )
}

export default Blog;
