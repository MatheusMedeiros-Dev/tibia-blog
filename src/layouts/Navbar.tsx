import { useAuthValue } from '../context/AuthContext'
import AppButton from '../components/AppButton'
import tibiaIcon from '../assets/tibia-icon.png'
import LineDivider from '../components/LineDivider'
import { useState } from 'react'
import Modal from '../components/Modal'

const Navbar = () => {
  const { user, logout } = useAuthValue()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleConfirm = () => {
    logout()
    setIsOpen(false)
  }
  return (
    <nav className='sticky top-0 left-0 w-full p-3 bg-surface-primary shadow-lg'>
      <ul className='flex items-center justify-between text-primary-text'>
        <div className='flex'>
          <li>
            <AppButton
              type='link'
              to='/'
              buttonType='withoutStyle'
              label={{ src: tibiaIcon, alt: 'Logo do site' }}
            />
          </li>
        </div>
        <div className='flex'>
          <AppButton type='navlink' buttonType='navbar' to='/' label='Home' />

          {!user && (
            <div className='flex'>
              <AppButton
                type='navlink'
                buttonType='navbar'
                to='/register'
                label='Cadastre-se'
              />
              <LineDivider direction='vertical' />
              <AppButton
                type='navlink'
                buttonType='login'
                to='/login'
                label='Entrar'
              />
            </div>
          )}
          {user && (
            <>
              <AppButton
                type='navlink'
                buttonType='navbar'
                to='/posts/create'
                label='Criar Post'
              />
              <AppButton
                type='navlink'
                buttonType='navbar'
                to='/dashboard/posts'
                label='Meus Posts'
              />
              <LineDivider direction='vertical' />
              <AppButton
                type='button'
                label='Sair'
                buttonType='logout'
                onClick={handleOpen}
              />
              <Modal
                isOpen={isOpen}
                onClose={handleClose}
                textToModel='Você tem certeza que deseja sair?'
                onClickClose={handleClose}
                onClickConfirm={handleConfirm}
              />
            </>
          )}
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
