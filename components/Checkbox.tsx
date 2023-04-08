type Props = {
  className?: string
  classNameInput?: string
  classNameText?: string
  label?: string
  checked?: boolean
  onChange?: Function
}

export default function Checkbox({
  className,
  classNameInput,
  classNameText,
  label,
  checked = false,
  onChange = () => {},
}: Props) {
  return (
    <label className={`${className} flex cursor-pointer items-center`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked)
        }}
        className={`${classNameInput} h-5 w-5 cursor-pointer rounded border border-neutral-200 text-primary duration-200 hover:border-primary/40 hover:bg-primary/5 focus:ring-primary`}
      />
      <span className={`${classNameText} ml-3 text-neutral-600`}>{label}</span>
    </label>
  )
}
