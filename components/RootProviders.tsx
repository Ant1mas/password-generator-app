import CustomSnackbarProvider from 'lib/plugins/notistack/CustomSnackbarProvider'

type Props = {
  children: React.ReactElement
}

export default function RootProviders({ children }: Props) {
  return <CustomSnackbarProvider>{children}</CustomSnackbarProvider>
}
