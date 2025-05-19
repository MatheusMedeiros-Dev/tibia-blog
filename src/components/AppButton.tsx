import { Link, NavLink } from 'react-router-dom'
import getActiveLinkClass from '../utils/getActiveLinkClass'

type AppButtonProps = {
  label?: string | ImageProps
  icon?: React.ReactNode
  type: 'button' | 'submit' | 'link' | 'navlink'
  buttonType?: // define o tipo de estilo do botão
  | 'default'
    | 'loading'
    | 'loadingDelete'
    | 'delete'
    | 'search'
    | 'submit'
    | 'login'
    | 'logout'
    | 'withoutStyle'
    | 'navbar'
    | 'backbar'
  to?: string // rota para links e navlinks
  onClick?: () => void
  error?: string | null // mensagem de erro para os submits
}

type ImageProps = {
  src: string
  alt: string
}

const AppButton = ({
  label,
  icon,
  type,
  to,
  buttonType,
  onClick,
  error,
}: AppButtonProps) => {
  const renderLabel = () => {
    if (!label) return null
    if (typeof label === 'string') return label

    return <img src={label.src} alt={label.alt} className='h-8 w-auto' />
  }

  const baseTypeClasses =
    'text-primary-text rounded-lg mt-1.5 mb-2.5 p-1.5 px-3 font-bold'

  const buttonTypeClasses: Record<string, string> = {
    default: `${baseTypeClasses} bg-btn-bg hover:bg-btn-hover transition duration-200`,
    loading: `${baseTypeClasses} bg-btn-hover animate-blink`,
    loadingDelete: `${baseTypeClasses} bg-btn-danger  animate-blink`,
    delete: `${baseTypeClasses} bg-btn-danger hover:bg-btn-danger-hover cursor-pointer`,
    submit: `${baseTypeClasses} bg-btn-bg hover:bg-btn-hover transition duration-200`,
    search:
      'flex items-center justify-center h-[26px] w-[34px] text-primary-text bg-btn-search-bg hover:bg-search-hover-bg transition duration-300 rounded-md cursor-pointer',
    login: 'flex rounded-sm text-inherit ml-2 font-medium',
    logout:
      'flex text-inherit cursor-pointer hover:bg-btn-danger rounded-sm px-4 m-0 transition duration-300 font-medium',
    navbar: 'flex rounded-sm text-inherit ml-2 font-medium',
    backbar:
      'inline-flex text-primary-text rounded-lg m-2 p-1.5 px-3 font-bold bg-btn-bg hover:bg-btn-hover transition duration-200',
    withoutStyle: '',
  }

  const finalClass = buttonType
    ? buttonTypeClasses[buttonType]
    : buttonTypeClasses.default

  if (type === 'button') {
    return (
      <>
        {typeof error === 'string' && error.trim() !== '' && (
          <p className='p-3 w-auto my-2 mb-0 bg-error-bg rounded-sm text-error-text font-semibold'>
            {error}
          </p>
        )}
        <button
          className={finalClass}
          onClick={onClick}
          disabled={buttonType === 'loadingDelete'}
        >
          {icon}
          {renderLabel()}
        </button>
      </>
    )
  }

  if (type === 'submit') {
    if (typeof label !== 'string') {
      return null
    }

    return (
      <>
        {/* Mensagem de erro exibida acima do botão de submit caso algum campo for preenchido incorretamente */}
        {typeof error === 'string' && error.trim() !== '' && (
          <p className='p-3 w-auto my-2 mb-0 bg-error-bg rounded-sm text-error-text font-semibold'>
            {error}
          </p>
        )}

        <div className='flex justify-center'>
          <input
            type='submit'
            disabled={buttonType === 'loading'}
            value={label}
            className={finalClass}
          />
        </div>
      </>
    )
  }

  if (type === 'link') {
    if (!to) {
      return null
    }
    return (
      <Link to={to} className={finalClass}>
        {renderLabel()}
      </Link>
    )
  }

  if (type === 'navlink') {
    if (!to) {
      return null
    }
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `${getActiveLinkClass({
              isActive,
            })} ${finalClass}`
          }
        >
          {renderLabel()}
        </NavLink>
      </li>
    )
  }
}

export default AppButton
