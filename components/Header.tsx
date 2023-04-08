import IconGithub from 'public/icons/github.svg'

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-end px-3 sm:px-6">
      <a
        href="https://github.com/ant1mas"
        target="_blank"
        rel="noreferrer"
        className="m-1 rounded-full p-3 duration-200 hover:bg-neutral-100"
      >
        <IconGithub className="h-6 fill-neutral-500 " />
      </a>
    </header>
  )
}
