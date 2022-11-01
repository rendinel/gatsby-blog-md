import React from 'react'

export default function BlogLayout({ children }) {
  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='-my-8 divide-y-2 divide-gray-100'>{children}</div>
      </div>
    </section>
  )
}
