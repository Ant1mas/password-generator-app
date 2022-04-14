import React from 'react'

type Props = {}

export default function CrackingTime({}: Props) {
  return (
    <div className='text-sm rounded-xl text-white bg-gradient-to-r from-red-400 to-red-500 px-2 py-1.5'>
      Estimated password cracking time is 6 months
    </div>
  )
}
