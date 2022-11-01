import React from 'react'
import {
  AiFillCodeSandboxSquare,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <AiFillCodeSandboxSquare className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full' />
          <span className='ml-3 text-xl'>MyBlog</span>
        </Link>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2022 MyBlog —
          <a
            href='https://twitter.com'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            @myblog
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a href='https://facebook.com' className='text-gray-500'>
            <AiFillFacebook className='w-5 h-5' />
          </a>
          <a href='https://twitter.com' className='ml-3 text-gray-500'>
            <AiOutlineTwitter className='w-5 h-5' />
          </a>
          <a href='https://instagram.com' className='ml-3 text-gray-500'>
            <AiFillInstagram className='w-5 h-5' />
          </a>
          <a href='https://linkedin.com' className='ml-3 text-gray-500'>
            <AiFillLinkedin className='w-5 h-5' />
          </a>
        </span>
      </div>
    </footer>
  )
}
