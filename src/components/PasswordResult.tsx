import React from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'

type Props = {}

export default function PasswordResult({}: Props) {
  const { generatedPassword } = React.useContext(GeneratorContext)

  return (
    <div className='px-1 py-4 text-2xl font-light break-words sm:text-3xl md:text-4xl text-neutral-500 scrollbar scrollbar-light scrollbar-thumb-rounded scrollbar-track-zinc-50 scrollbar-thumb-zinc-200 hover:scrollbar-thumb-zinc-300'>
      {generatedPassword}
    </div>
  )
}
