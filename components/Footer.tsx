import LogoAnt1mas from 'public/logo/logo-ant1mas.svg'

export default function Footer() {
  return (
    <footer className="my-8 flex justify-center">
      <div className="flex flex-col items-center text-sm font-light uppercase text-neutral-500">
        <div className="mb-2">Created by</div>
        <a href="https://ant1mas.dev" target="_blank" rel="noreferrer">
          <LogoAnt1mas className="h-16 cursor-pointer fill-black opacity-50 duration-150 hover:opacity-100 focus:opacity-100" />
        </a>
      </div>
    </footer>
  )
}
