import React from 'react'

type Props = {
  className?: string
  children?: any
  onClick?: Function
}

export default function Button({
  className,
  children,
  onClick = ()=>{},
}: Props) {
  return (
    <button
      onClick={()=>{onClick()}}
      className={`${className} inline-flex items-center duration-200 uppercase fill-primary text-primary px-4 py-2 border border-neutral-200 rounded font-medium text-sm hover:border-primary/40 hover:bg-primary/5 focus:outline-primary focus:bg-primary/5`}
    >
      {children}
    </button>
  )
}
