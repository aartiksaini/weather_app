import React from 'react'
import { WiHumidity } from 'react-icons/wi'
import { MdAir } from 'react-icons/md'
import { CiTempHigh } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { GiCompass, GiWindSlap } from 'react-icons/gi'
import { BsSunrise, BsSunset } from 'react-icons/bs'


const WeatherCard = ({data}:any) => {
  return (
    <>
    <div className='p-12'>
      <h1 className='mb-4 text-2xl text-white'>Weather Details</h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
    <h3>Wind Speed</h3>
    <h3>{data.current.wind_mph} mph</h3>

  </div>
  <div className='text-5xl'>
<GiWindSlap fontSize={40}></GiWindSlap>
  </div>

  </div>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
    <h3>Humidity</h3>
    <h3>{data.current.humidity}%</h3>

  </div>
  <div className='text-5xl'>
<WiHumidity fontSize={40}></WiHumidity>
  </div>

  </div>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
    <h3>Wind Direction</h3>
    <h3>{data.current.wind_dir}</h3>

  </div>
  <div className='text-5xl'>
<GiCompass fontSize={40}></GiCompass>
  </div>

  </div>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
    <h3>Sunrise</h3>
    <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>

  </div>
  <div className='text-5xl'>
<BsSunrise fontSize={40}></BsSunrise>
  </div>

  </div>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
  <h3>Sunset</h3>
    <h3>{data.forecast.forecastday[0].astro.sunset}</h3>

  </div>
  <div className='text-5xl'>
<BsSunset fontSize={40}></BsSunset>
  </div>

  </div>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
    <h3>Air Pressure</h3>
    <h3>{data.current.pressure_mb}hPa</h3>

  </div>
  <div className='text-5xl'>
<MdAir fontSize={40}></MdAir>
  </div>

  </div>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
    <h3>Feels Like</h3>
    <h3>{data.current.feelslike_c}°</h3>

  </div>
  <div className='text-5xl'>
<CiTempHigh fontSize={40}></CiTempHigh>
  </div>

  </div>
  <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
  <div className='text-2xl'>
    <h3>Visibilty</h3>
    <h3>{data.current.vis_km}km</h3>

  </div>
  <div className='text-5xl'>
<FaEye fontSize={40}></FaEye>
  </div>

  </div>


</div>

    </div>
    </>
  )
}

export default WeatherCard