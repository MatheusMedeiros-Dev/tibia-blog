import { FormEvent } from 'react'
import { FaSearch } from 'react-icons/fa'
import InputField from './InputField'
import AppButton from './AppButton'

type SearchBarProps = {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  inputValue: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const SearchBar = ({ onSubmit, inputValue, onChange }: SearchBarProps) => {
  return (
    <>
      <form onSubmit={onSubmit} className='flex justify-center'>
        <div className='flex w-[700px] mb-2 bg-overlay-bg rounded-b-lg'>
          <div className='inline-flex items-center h-[26px] m-3 mr-1'>
            <InputField
              inputType='search'
              name='query'
              value={inputValue}
              placeholder='Buscar por tags'
              onChange={onChange}
            />
          </div>
          <div className='flex items-center'>
            <AppButton type='button' icon={<FaSearch />} buttonType='search' />
          </div>
        </div>
      </form>
    </>
  )
}

export default SearchBar
