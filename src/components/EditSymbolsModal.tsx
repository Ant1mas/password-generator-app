import React from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'
import { useAcceptableSymbols } from 'lib/hooks/useAcceptableSymbols'
import Modal from 'components/Modal'
import Checkbox from 'components/Checkbox'
import Button from 'components/Button'

type Props = {
  opened?: boolean
  handleOpened?: Function
}

export default function EditSymbolsModal({opened = false, handleOpened}: Props) {
  const {
    acceptableSymbols,
    activatedSymbolsString,
    isSymbolActivated,
    setSymbol,
  } = useAcceptableSymbols()
  const { setCharsetSymbolsList } = React.useContext(GeneratorContext)

  React.useEffect(() => {
    setCharsetSymbolsList(activatedSymbolsString)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatedSymbolsString])

  return (
    <Modal opened={opened} handleOpened={handleOpened}>
      <div className='flex flex-col items-center px-12 py-7'>
        <h4 className='text-lg font-light uppercase'>Acceptable Symbols</h4>
        <div className='grid grid-cols-3 mt-4 gap-7'>
          {acceptableSymbols.map((symbol, index) => (
            <Checkbox 
              key={index}
              label={symbol}
              checked={isSymbolActivated(symbol)}
              onChange={(val)=>{setSymbol(symbol, val)}}
              className=''
            />
          ))}
        </div>
        <Button
          onClick={() => {handleOpened(false)}}
          className='w-full mt-6'
        >
          Close
        </Button>
      </div>
    </Modal>
  )
}
