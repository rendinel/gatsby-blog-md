import React from 'react'
import Hero from './Hero'
import News from './News'
import Contact from './Contact'
import Seo from '../seo/seo'

function HomePage() {
  return (
    <>
      <Seo title='John Doe Website' />
      <Hero />
      <News />
      <Contact />
    </>
  )
}

export default HomePage
