import React,{useState,useEffect} from 'react'

const Trending24 = () => {

    const [trendingCoinData,setTrendingCoinData]=useState([])
    const [error,setError]=useState("")

    useEffect(()=>{
        ;(
            async()=>{
                try {
                    const res=await fetch("https://api.coingecko.com/api/v3/search/trending")
                    const data = await res.json()
                    setTrendingCoinData(data?.coins.slice(0,3))
                } catch (error) {
                    setError(error.message)
                }
            }
        )()
    },[])


  return (
    <div className='flex flex-col gap-5 bg-white rounded-2xl p-5'>
        <div className="text-xl font-lg font-bold bg-white">Trending 24H</div>
        <div className='flex flex-col gap-5 bg-white'>
            { error ? <p className='text-red-500'>{error}</p>:
             trendingCoinData.map((data,index)=>(
                <div className="flex gap-7 justify-between items-center px-3" key={index} >
                    <div className="flex flex-row gap-2 justify-center items-center">     
                        <img src={data.item.small} alt="" className='w-5 h-5 rounded-full'/>
                        <div className="text-black text-[0.9rem] font-medium">{data.item.name}({data.item.symbol})</div>
                    </div>
                    <div className="bg-green-100 text-[0.8rem] text-green-600 px-2 py-1 rounded-md flex flex-row"><img src='/arrow.svg' className='w-3 h-5'/>{Math.round(data.item.data.price_change_percentage_24h.inr *100)/100}%</div>
                </div>
             ))
            }
        </div>
    </div>
  )
}

export default Trending24