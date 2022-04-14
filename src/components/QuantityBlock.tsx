import React from 'react'

type Props = {
  value: number
  setValue?: Function
}

export default function QuantityBlock({value, setValue}: Props) {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <input
        className="slider-thumb rounded-xl duration-200 appearance-none w-[400px] bg-primary/30 h-0.5 cursor-pointer hover:bg-primary/50 focus:outline-primary"
        type="range"
        min="6"
        max="128"
        step="1"
        value={value}
        onChange={(e)=>{setValue(Number(e.target.value))}}
      />
      <div className='inline-flex items-center justify-center mt-4 ml-5 md:mt-0 '>
        <button
          className='py-2 px-3 text-2xl font-light border border-neutral-200 z-10 border-r-0 h-[58px] rounded-l duration-200 text-neutral-500 hover:bg-primary/5 hover:border-primary/40 focus:outline-primary'
          onClick={()=>{setValue(value - 1)}}
        >
          -
        </button>
        <input
          className="inline-flex px-3 py-4 text-center duration-200 border outline-none ring-transparent ring-0 border-neutral-200 input-number-hidden-arrows text-neutral-500 hover:text-neutral-700 hover:border-primary/40 hover:bg-primary/5 focus:border-primary"
          type="number"
          min="6"
          max="128"
          value={value}
          onChange={(e)=>{setValue(Number(e.target.value))}}
        />
        <button
          className='py-2 px-3 text-xl font-light border border-neutral-200 z-10 border-l-0 h-[58px] rounded-r duration-200 text-neutral-500 hover:bg-primary/5 hover:border-primary/40 focus:outline-primary'
          onClick={()=>{setValue(value + 1)}}
        >
          +
        </button>
      </div>
    </div>
  )
}
