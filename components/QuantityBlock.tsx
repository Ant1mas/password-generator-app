import { useContext } from 'react'

import { GeneratorContext } from 'lib/context/generatorContext'
import { MIN_LENGTH, MAX_LENGTH } from 'lib/hooks/usePasswordSettings'

export default function QuantityBlock() {
  const { passwordLength, setPasswordLength } = useContext(GeneratorContext)

  return (
    <div className="flex flex-wrap items-center justify-center">
      <input
        className="slider-thumb h-0.5 w-[400px] cursor-pointer appearance-none rounded-xl bg-primary/30 duration-200 hover:bg-primary/50 focus:outline-primary"
        type="range"
        min="6"
        max="128"
        step="1"
        value={passwordLength}
        onChange={(e) => {
          setPasswordLength(Number(e.target.value))
        }}
      />
      <div className="ml-5 mt-4 inline-flex items-center justify-center md:mt-0 ">
        <button
          className="z-10 h-[58px] rounded-l border border-r-0 border-neutral-200 px-3 py-2 text-2xl font-light text-neutral-500 duration-200 hover:border-primary/40 hover:bg-primary/5 focus:outline-primary"
          onClick={() => {
            passwordLength > MIN_LENGTH && setPasswordLength(passwordLength - 1)
          }}
        >
          -
        </button>
        <input
          className="input-number-hidden-arrows inline-flex border border-neutral-200 px-3 py-4 text-center text-neutral-500 outline-none ring-0 ring-transparent duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-neutral-700 focus:border-primary"
          type="number"
          min="6"
          max="128"
          value={passwordLength.toString()}
          onChange={(e) => {
            setPasswordLength(Number(e.target.value))
          }}
          onBlur={() => {
            if (passwordLength < MIN_LENGTH) {
              setPasswordLength(MIN_LENGTH)
            }
            if (passwordLength > MAX_LENGTH) {
              setPasswordLength(MAX_LENGTH)
            }
          }}
        />
        <button
          className="z-10 h-[58px] rounded-r border border-l-0 border-neutral-200 px-3 py-2 text-xl font-light text-neutral-500 duration-200 hover:border-primary/40 hover:bg-primary/5 focus:outline-primary"
          onClick={() => {
            passwordLength < MAX_LENGTH && setPasswordLength(passwordLength + 1)
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}
