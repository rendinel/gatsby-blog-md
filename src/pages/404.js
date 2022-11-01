import React from 'react'
import { navigate } from 'gatsby'

export default function pageNotFound() {
  return (
    <div>
      <h1>The page you were looking for doesen't exist</h1>
      <button onClick={() => navigate('/')}>Back Home</button>
    </div>
  )
}
