import React from 'react'
import './src/styles/global.css'
import Layout from './src/components/layout/Layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
