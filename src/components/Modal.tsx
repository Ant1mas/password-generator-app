import React from 'react'

import Portal from 'components/Portal'

type Props = {
  children: JSX.Element
  opened?: boolean
  handleOpened?: Function
}

export default function Modal({children, opened = false, handleOpened}: Props) {
  if (!opened) {return null}
  return (
    <Portal>
      <div
        onClick={(e)=>{e.stopPropagation(); handleOpened(false)}}
        className='fixed inset-0 bg-gray-200/20 backdrop-blur-sm z-[999] overflow-y-auto grid'
      >
        <div className='flex items-center justify-center'>
          <div
            onClick={(e)=>{e.stopPropagation()}}
            className='min-w-[50px] min-h-[50px] bg-white rounded shadow-2xl m-6'
          >
            {children}
          </div>
        </div>
        </div>
    </Portal>
  )
}
