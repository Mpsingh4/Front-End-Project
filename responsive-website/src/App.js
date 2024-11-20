import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Blog, Features, Footer, Header, Pos, WhatWS } from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatWS />
      <Feature />
      <Pos />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
