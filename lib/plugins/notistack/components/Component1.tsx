import React from 'react'

type Props = {
  message?: any
}

const Component1 = React.forwardRef<
  HTMLDivElement,
  { id: string | number; message: string | React.ReactNode }
>(({ message }: Props, ref) => {
  return (
    <div
      ref={ref}
      className="flex min-w-[200px] justify-start rounded-md border-2 border-primary bg-white/90 px-5 py-3 text-neutral-700 shadow-md backdrop-blur"
    >
      {message}
    </div>
  )
})

Component1.displayName = 'Component1'

export default Component1
