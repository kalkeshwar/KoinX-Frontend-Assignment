import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from './Icon'

const TrendingCoins = () => {

    const [data,setData] = useState([])
    const [error ,setError] = useState("")

    useEffect(()=>{
        ;(
            async()=>{
                try {
                    const res=await fetch("https://api.coingecko.com/api/v3/search/trending")
                    const response = await res.json()
                    setData(response?.coins)
                } catch (error) {
                    setError(error.message)
                }
            }
        )()
    },[])

  return (
    <div className='w-full bg-white flex justify-between overflow-hidden overflow-x-scroll no-scrollbar relative '>
        <div className='w-10 h-10 border border-gray-200 rounded-full sticky top-[40%] left-10 shadow-xl'><ArrowRight className={`w-10 h-10`}/></div>
        <div className='flex flex-row gap-10 items-center justify-center p-5'>
            {
                data.map((item,index)=>(
                    <div className='border border-gray-200 p-5 flex flex-col w-[15rem] h-[10rem] flex-wrap rounded-xl gap-2' key={index}>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={item.item.small} className='w-6 h-6 rounded-full' alt="" />
                            <div className=''>{item.item.name}</div>
                            <div className = {`flex flex-wrap ${item.item.data.price_change_percentage_24h.inr>0?"bg-green-200 text-green-600":"bg-red-200 text-red-600"} px-1 rounded-md`}>{Math.round(item.item.data.price_change_percentage_24h.inr *100)/100}</div>
                        </div>
                        <div className='flex flex-wrap font-medium text-xl' dangerouslySetInnerHTML={{ __html: item.item.data.price }}></div>
                        <img src={item.item.data.sparkline} alt="" className='w-[80%] h-10'/>
                    </div>
                ))
            }
        </div>
        <div className='w-10 h-10 border border-gray-200 shadow-xl rounded-full sticky top-[40%] right-10'><ArrowLeft className={`w-10 h-10`}/></div>
    </div>
  )
}

export default TrendingCoins