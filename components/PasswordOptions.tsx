import { useState } from 'react'

import { useGeneratorContext } from 'lib/context/generatorContext'
import IconEdit from 'public/icons/edit.svg'
import IconInfo from 'public/icons/info.svg'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import EditSymbolsModal from 'components/EditSymbolsModal'

export default function PasswordOptions() {
  const [editSymbolsModalOpened, setEditSymbolsModalOpened] = useState(false)
  const {
    charsetLowercaseOption,
    charsetUppercaseOption,
    charsetNumbersOption,
    charsetSymbolsOption,
    charsetEasyToReadOption,
    setCharsetLowercaseOption,
    setCharsetUppercaseOption,
    setCharsetNumbersOption,
    setCharsetSymbolsOption,
    setCharsetEasyToReadOption,
  } = useGeneratorContext()

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex w-full justify-center sm:mr-8 sm:flex-1 sm:justify-end">
        <div className="flex flex-col">
          <Checkbox
            label="Lowercase"
            checked={charsetLowercaseOption}
            onChange={(val) => {
              setCharsetLowercaseOption(val)
            }}
            className="my-2"
          />
          <Checkbox
            label="UPPERCASE"
            checked={charsetUppercaseOption}
            onChange={(val) => {
              setCharsetUppercaseOption(val)
            }}
            className="my-2"
          />
          <Checkbox
            label="Numbers"
            checked={charsetNumbersOption}
            onChange={(val) => {
              setCharsetNumbersOption(val)
            }}
            className="my-2"
          />
          <Checkbox
            label="Symbols"
            checked={charsetSymbolsOption}
            onChange={(val) => {
              setCharsetSymbolsOption(val)
            }}
            className="my-2"
          />
          <Button
            onClick={() => {
              setEditSymbolsModalOpened(true)
            }}
            className="my-2"
          >
            <IconEdit className="mr-2 inline h-4" />
            edit symbols
            <EditSymbolsModal
              opened={editSymbolsModalOpened}
              handleOpened={setEditSymbolsModalOpened}
            />
          </Button>
        </div>
      </div>
      <div className="hidden w-0.5 bg-neutral-200 sm:flex"></div>
      <div className="flex justify-center sm:ml-8 sm:flex-1 sm:justify-start">
        <div className="flex flex-col">
          <div className="inline-flex items-center">
            <Checkbox
              label="Easy to read"
              checked={charsetEasyToReadOption}
              onChange={(val) => {
                setCharsetEasyToReadOption(val)
              }}
              className="my-2"
            />
            <button className="group relative ml-1 inline rounded-full p-1 duration-200 focus:outline-primary">
              <IconInfo className="h-5 fill-neutral-400 duration-200 hover:fill-primary/75" />
              <div className="invisible absolute right-[-50%] top-full mt-1 flex w-48 translate-x-[25%] items-center justify-center rounded border bg-white p-3 text-sm opacity-0 shadow duration-200 group-hover:visible group-hover:opacity-100">
                Avoid ambiguous characters (o, O, 0, 1, l, I)
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
