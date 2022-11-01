import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='relative'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
