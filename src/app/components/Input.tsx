import React from 'react'
import { CiSearch } from "react-icons/ci";

interface Inputprop{
    handleSearch:(event:React.KeyboardEvent<HTMLInputElement>)=>void
    setLocation:React.Dispatch<React.SetStateAction<string>>
}

const Input = ({handleSearch,setLocation}:Inputprop) => {
  return (
    <form className='flex items-center md:w-2/4 w-full order-2 md:order-1'>
        <input onKeyDown={handleSearch} onChange={(e)=>setLocation(e.target.value)} type='text' placeholder='Search City' className='w-full bg-transparent border-b-2 placeholder-white outline-none text-white'></input>
        <div className='ml-[-25px] text-white cursor-pointer'><CiSearch /></div>
    </form>
  )
}

export default Input