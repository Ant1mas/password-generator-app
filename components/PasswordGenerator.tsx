import QuantityBlock from 'components/QuantityBlock'
import PasswordStrength from 'components/PasswordStrength'
import QrCode from 'components/QrCode'
import PasswordButtons from 'components/PasswordButtons'
import PasswordResult from 'components/PasswordResult'
import PasswordOptions from 'components/PasswordOptions'

export default function PasswordGenerator() {
  return (
    <main className="flex grow flex-col items-center text-center">
      <h1 className="mb-6 mt-3 text-4xl font-thin uppercase sm:text-5xl">
        Password Generator
      </h1>
      <section className="w-full max-w-[728px] rounded-xl bg-white">
        <PasswordStrength />
        <div className="px-4 pb-24 pt-5 md:px-12">
          <PasswordResult />
          <QrCode />
          <PasswordButtons />
          <div className="mt-10">
            <QuantityBlock />
          </div>
          <div className="mt-10">
            <PasswordOptions />
          </div>
        </div>
      </section>
    </main>
  )
}
