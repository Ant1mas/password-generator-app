import React from 'react'

type Props = {
  message?: any
}

const Component1 = React.forwardRef<HTMLDivElement, { id: string | number, message: string | React.ReactNode }>(({message}: Props, ref) => {
  return (
    <div ref={ref} className='px-5 py-3 bg-white/90 flex backdrop-blur shadow-md border-2 border-primary justify-start rounded-md min-w-[200px] text-neutral-700'>
      {message}
    </div>
  )
})

Component1.displayName = 'Component1'

export default Component1
