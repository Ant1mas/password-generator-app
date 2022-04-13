import React from 'react'

import IconTranslate from 'public/icons/translate.svg'
import IconGithub from 'public/icons/github.svg'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex items-center justify-end h-16 px-6'>
      <button
        onClick={()=>{}}
        className='p-3 m-1 duration-200 rounded-full hover:bg-neutral-100'
      >
        <IconTranslate className="h-6 cursor-pointer fill-neutral-500 " />
      </button>
      <a
        href='https://github.com/ant1mas'
        target="_blank"
        rel="noreferrer"
        className='p-3 m-1 duration-200 rounded-full hover:bg-neutral-100'
      >
        <IconGithub className="h-6 fill-neutral-500 " />
      </a>
    </header>
  )
}
