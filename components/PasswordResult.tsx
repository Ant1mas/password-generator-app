import { useGeneratorContext } from 'lib/context/generatorContext'

export default function PasswordResult() {
  const { generatedPassword } = useGeneratorContext()

  return (
    <div className="ym-hide-content break-words px-1 py-4 text-2xl font-light text-neutral-500 sm:text-3xl md:text-4xl">
      {generatedPassword}
    </div>
  )
}
