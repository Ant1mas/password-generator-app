import React from 'react'

type Props = {
  className?: string
  classNameInput?: string
  classNameText?: string
  label?: string
  checked?: boolean
  onChange?: Function
}

export default function Checkbox({
  className,
  classNameInput,
  classNameText,
  label,
  checked = false,
  onChange = ()=>{},
}: Props) {
  return (
    <label className={`${className} flex items-center cursor-pointer`}>
      <input 
        type='checkbox'
        checked={checked}
        onChange={(e)=>{onChange(e.target.checked)}}
        className={`${classNameInput} w-5 h-5 duration-200 border rounded cursor-pointer border-neutral-200 text-primary hover:bg-primary/5 hover:border-primary/40 focus:ring-primary`}
      />
      <span className={`${classNameText} ml-3 text-neutral-600`}>{label}</span>
    </label>
  )
}
