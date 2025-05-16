import { IoLogoLinkedin, IoLogoGithub, IoIosSend } from 'react-icons/io'
import LineDivider from '../components/LineDivider'
import AppButton from '../components/AppButton'
const Footer = () => {
  return (
    <>
      <footer className='flex bg-surface-primary text-primary-text shadow-lg'>
        <div className='flex justify-start w-[50vw]'>
          <div className='flex justify-center items-center'>
            <p className='ml-1'>Contatos</p>
          </div>
          <LineDivider direction='vertical' />
          <div>
            <p className='flex items-center'>
              <IoLogoGithub />
              <a href='https://github.com/MatheusMedeiros-Dev' target='blank'>
                GitHub
              </a>
            </p>
            <p className='flex items-center'>
              <IoLogoLinkedin />
              <a
                href='https://www.linkedin.com/in/matheus-cavalcanti-dev/'
                target='blank'
              >
                LinkedIn
              </a>
            </p>
            <p className='flex items-center'>
              <IoIosSend />
              <a href='mailto:matheuscavalcantidev@outlook.com'>
                E-mail: matheuscavalcantidev@outlook.com
              </a>
            </p>
          </div>
        </div>
        <LineDivider direction='vertical' />
        <div className='flex w-[50vw]'>
          <p>
            <AppButton
              type='link'
              label='Sobre'
              to='/about'
              buttonType='withoutStyle'
            />
          </p>
        </div>
      </footer>
      <div className='bg-surface-primary text-primary-text'>
        <p className='text-center items-center m-1.5'>
          &copy; 2025 - Feito por{' '}
          <a
            href='https://github.com/MatheusMedeiros-Dev/mini-blog'
            target='blank'
            className='inline-flex items-center gap-1'
          >
            MatheusMedeiros-Dev
            <IoLogoGithub />
          </a>
        </p>
      </div>
    </>
  )
}

export default Footer
