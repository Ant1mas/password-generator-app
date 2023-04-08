import { SnackbarProvider } from 'notistack'

import Component1 from 'lib/plugins/notistack/components/Component1'

type Props = {
  children: JSX.Element
}

export default function CustomSnackbarProvider({ children }: Props) {
  return (
    <SnackbarProvider
      transitionDuration={{ enter: 150, exit: 150 }}
      content={(key, message) => <Component1 id={key} message={message} />}
    >
      {children}
    </SnackbarProvider>
  )
}
