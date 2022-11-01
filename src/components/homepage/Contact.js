import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

export default function Contact() {
  const [state, handleSubmit] = useForm('xnqrjwjq')
  if (state.succeeded) {
    return (
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Thanks for the message!
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              We will hit you back as soon as possible.
            </p>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className='text-gray-600 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Contact Us
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <form onSubmit={handleSubmit} className='lg:w-1/2 md:w-2/3 mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label
                  htmlFor='name'
                  className='leading-7 text-sm text-gray-600'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                <ValidationError
                  prefix='Name'
                  field='name'
                  errors={state.errors}
                />
              </div>
            </div>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className='leading-7 text-sm text-gray-600'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div className='p-2 w-full'>
              <div className='relative'>
                <label
                  htmlFor='message'
                  className='leading-7 text-sm text-gray-600'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                ></textarea>
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
            </div>
            <div className='p-2 w-full'>
              <button
                type='submit'
                disabled={state.submitting}
                className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              >
                Button
              </button>
            </div>
            <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
              <p className='text-indigo-500'>example@email.com</p>
              <p className='leading-normal my-5'>
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              <span className='inline-flex'>
                <a href='https://www.facebook.com/' className='text-gray-500'>
                  <AiFillFacebook className='w-5 h-5' />
                </a>
                <a href='https://twitter.com/' className='ml-4 text-gray-500'>
                  <AiOutlineTwitter className='w-5 h-5' />
                </a>
                <a
                  href='https://www.instagram.com/'
                  className='ml-4 text-gray-500'
                >
                  <AiFillInstagram className='w-5 h-5' />
                </a>
                <a
                  href='https://www.linkedin.com/'
                  className='ml-4 text-gray-500'
                >
                  <AiFillLinkedin className='w-5 h-5' />
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
