type Props = {
  className?: string
  children?: any
  onClick?: Function
}

export default function Button({
  className,
  children,
  onClick = () => {},
}: Props) {
  return (
    <button
      onClick={() => {
        onClick()
      }}
      className={`${className} inline-flex items-center justify-center rounded border border-neutral-200 fill-primary px-4 py-2 text-sm font-medium uppercase text-primary duration-200 hover:border-primary/40 hover:bg-primary/5 focus:bg-primary/5 focus:outline-primary`}
    >
      {children}
    </button>
  )
}
