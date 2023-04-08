import Portal from 'components/Portal'

type Props = {
  children: JSX.Element
  opened?: boolean
  handleOpened?: Function
}

export default function Modal({
  children,
  opened = false,
  handleOpened,
}: Props) {
  if (!opened) {
    return null
  }
  return (
    <Portal>
      <div
        onClick={(e) => {
          e.stopPropagation()
          handleOpened(false)
        }}
        className="fixed inset-0 z-[999] grid overflow-y-auto bg-gray-200/20 backdrop-blur-sm"
      >
        <div className="flex items-center justify-center">
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="m-6 min-h-[50px] min-w-[50px] rounded bg-white shadow-2xl"
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
