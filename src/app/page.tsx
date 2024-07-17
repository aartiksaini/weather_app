'use client'
import Input from './components/Input'
import React, { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import Current from './components/Current'
import { WeekForcast } from './components/WeekForcast'
const Home = () => {
  const [data,setData]=useState({});
  const [location,setLocation]=useState("");
  const [error,setError]=useState("");

  const url=`http://api.weatherapi.com/v1/forecast.json?key=e0d9d3fa7ec647e080f161019241607&q=${location}&days=7&aqi=yes&alerts=yes`

  async function handleSearch(e:React.KeyboardEvent<HTMLInputElement>){
    if(e.key==="Enter"){
      e.preventDefault()
      try{
        const res=await fetch(url);
        if(!res.ok){
          throw new Error('');
        }
        const data=await res.json();
        setData(data)
        setLocation("")
        setError("")
      }
      catch(err){
        setError("City not found");
        setData({});
      }
    }
  }
let content;
if(Object.keys(data).length===0 && error===''){
  content=(
    <div className='text-white text-center h-screen mt-[5rem]'>
      <h2 className='text-3xl font-bold mb-4'>Welcome to the Weather App</h2>
      <p className='text=xl'>Enter a City  name to get the weather forecast </p>
    </div>
  )
}
else if(error!==""){
  content=(
    <div className='text-white text-center h-screen mt-[5rem]'>
      <p className='text-3xl font-bold mb-4'>
        City Not Found
      </p >
      <p className='text-3xl font-bold mb-4'>
      Enter a Valid City


      </p>
    </div>
  )
}
else{
  content=(
   <>
    <div className='flex md:flex-row flex-col p-12 items-center justify-between'>
<Current data={data}></Current>
<WeekForcast data={data}></WeekForcast>
    </div>
    <div>
      <WeatherCard data={data}></WeatherCard>
    </div>
   </>
  )
}

  return (
    <div className='bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit'> 
<div className='bg-white/25 w-full rounded-lg flex flex-col h-fit'>
{/* INPUT AND LOGO */}
<div className='flex flex-col justify-between items-center p-12'> 
  <Input handleSearch={handleSearch} setLocation={setLocation}/>

  </div>
<h1 className='mt-5 position: absolute mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold text-3xl'>Whether App</h1>

{content
}
</div>
    </div>
  )
}

export default Home