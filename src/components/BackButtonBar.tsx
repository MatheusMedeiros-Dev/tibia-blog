import AppButton from './AppButton'

type BackButtonBarProps = {
  widthClass: string
  to: string
}

const BackButtonBar = ({ widthClass, to }: BackButtonBarProps) => {
  return (
    <div className='flex justify-center'>
      <div className={`${widthClass} bg-overlay-bg mb-2 rounded-b-lg`}>
        <AppButton type='link' label='Voltar' to={to} buttonType='backbar' />
      </div>
    </div>
  )
}

export default BackButtonBar
