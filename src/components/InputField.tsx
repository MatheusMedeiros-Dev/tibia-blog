type InputFieldProps = {
  label?: string
  type?: 'text' | 'textarea' | 'email' | 'password'
  inputType?: 'default' | 'search'
  name: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  placeholder?: string
  required?: boolean
  autoComplete?: string
}

const InputField = ({
  label,
  type = 'text',
  inputType,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete,
}: InputFieldProps) => {
  const inputTypeClasses: Record<string, string> = {
    default:
      'flex bg-input-bg text-primary-text p-1 w-[220px] mb-1 placeholder-input-placeholder indent-1 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400',
    search:
      'bg-content-bg focus:outline-none border border-input-border rounded-md focus:outline-none indent-1 focus:ring-2 focus:ring-cyan-400',
  }

  const finalClass = inputType
    ? inputTypeClasses[inputType]
    : inputTypeClasses.default
  return (
    <label>
      {label && (
        <span className='block font-semibold text-input-label'>{label}</span>
      )}
      {type === 'textarea' ? (
        <textarea
          className={finalClass}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
        />
      ) : (
        <input
          className={finalClass}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
        />
      )}
    </label>
  )
}

export default InputField
