import ReactDOM from 'react-dom'

type Props = {
  children: JSX.Element
}

export default function Portal({ children }: Props) {
  if (typeof window !== 'object') {
    return null
  }
  return ReactDOM.createPortal(
    <div className="portal">{children}</div>,
    document.body,
  )
}
