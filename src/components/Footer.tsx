import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='flex justify-center my-8'>
      <div className='text-sm font-light uppercase text-neutral-500'>
        Created by&nbsp;
        <a
          href='https://github.com/ant1mas'
          target='_blank'
          rel="noreferrer"
          className='underline duration-200 hover:text-primary'
        >
          Anton Moskovskiy
        </a>
      </div>
    </footer>
  )
}
