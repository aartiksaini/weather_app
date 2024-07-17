import React from 'react'


interface Currentprops{
  data:{
    current:{
      icon:string
      text:string
    };
    temp_f:number;
  };
  location:{
    name:string
    region:string
  }
}





import { IoLocationOutline } from "react-icons/io5";



import { getCurrentdata } from '../utils/currentdata'

export default function Current({data}:any) {
    
const currentData=getCurrentdata();
const weathericons=data.current ? data.current.condition.icon : null
  return (
    <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'> 
<div className='flex items-center'>
<div>
    <h1 className= ' text -3xl text-white'>Today</h1>
    <p className='text-white'>{currentData}</p>
   
</div>
 
  {weathericons && (
    <div>
    <img  className='w-[50px] object-cover' src={weathericons} alt={data.current.condition.text}/>
  </div>
  )}

</div>
<div>
<p className='text-5xl text-white'>
  {data.current.temp_c.toFixed()}
  <span >°</span>
</p>
<span>{data.current.condition.text}</span>
    </div>
    <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl '>
    <IoLocationOutline />
    <span>{data.location.name},{data.location.region}</span>
    </div>
    </div>

  )
}

