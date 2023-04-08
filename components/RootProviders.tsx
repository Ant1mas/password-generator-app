import { GeneratorContextProvider } from '@/lib/context/GeneratorContext'

type Props = {
  children: React.ReactElement
}

export default function RootProviders({ children }: Props) {
  return <GeneratorContextProvider>{children}</GeneratorContextProvider>
}
