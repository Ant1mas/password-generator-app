import React from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'
import IconEdit from 'public/icons/edit.svg'
import IconInfo from 'public/icons/info.svg'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import EditSymbolsModal from 'components/EditSymbolsModal'

type Props = {}

export default function PasswordOptions({}: Props) {
  const [editSymbolsModalOpened, setEditSymbolsModalOpened] = React.useState(false)
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
  } = React.useContext(GeneratorContext);

  return (
    <div className='flex flex-wrap justify-center'>
      <div className='flex justify-center w-full sm:justify-end sm:mr-8 sm:flex-1'>
        <div className='flex flex-col'>
          <Checkbox 
            label='Lowercase'
            checked={charsetLowercaseOption}
            onChange={(val)=>{setCharsetLowercaseOption(val)}}
            className='my-2'
          />
          <Checkbox 
            label='UPPERCASE'
            checked={charsetUppercaseOption}
            onChange={(val)=>{setCharsetUppercaseOption(val)}}
            className='my-2'
          />
          <Checkbox 
            label='Numbers'
            checked={charsetNumbersOption}
            onChange={(val)=>{setCharsetNumbersOption(val)}}
            className='my-2'
          />
          <Checkbox 
            label='Symbols'
            checked={charsetSymbolsOption}
            onChange={(val)=>{setCharsetSymbolsOption(val)}}
            className='my-2'
          />
          <Button
            onClick={()=>{setEditSymbolsModalOpened(true)}}
            className='my-2'
          >
            <IconEdit className='inline h-4 mr-2' />
            edit symbols
            <EditSymbolsModal opened={editSymbolsModalOpened} handleOpened={setEditSymbolsModalOpened} />
          </Button>
        </div>
      </div>
      <div className='w-0.5 bg-neutral-200 hidden sm:flex'></div>
      <div className='flex justify-center sm:justify-start sm:flex-1 sm:ml-8'>
        <div className='flex flex-col'>
          <div className='inline-flex items-center'>
            <Checkbox 
              label='Easy to read'
              checked={charsetEasyToReadOption}
              onChange={(val)=>{setCharsetEasyToReadOption(val)}}
              className='my-2'
            />
            <button
              className='inline p-1 ml-1 duration-200 rounded-full focus:outline-primary'
            >
              <IconInfo className='h-5 duration-200 fill-neutral-400 hover:fill-primary/75' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
