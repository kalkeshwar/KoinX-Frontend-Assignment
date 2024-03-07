import React from "react";

const Heading = (props) => {
    const { imageLink, name, symbol, Rank, usdPrice, inrPrice ,change24 }=props
    const symbolname=String(symbol).toLocaleUpperCase()

    
  return (
    <div className="w-full flex flex-col gap-5 bg-white rounded-t-xl p-5">
      <div className="w-full flex flex-row gap-10">
        <div className="flex flex-row items-center gap-1">
          <img src={imageLink} alt="" className="w-10 h-10 rounded-full" />
          <div className="text-[1.3] font-semibold">{name}</div>
          <div className="text-[0.9rem] flex justify-center items-center font-medium text-gray-500">{symbolname}</div>
        </div>
        <div className="bg-gray-500 text-white rounded-md flex font-medium justify-center text-[0.9rem] items-center px-2">Rank #{Rank}</div>
      </div>
      <div className="w-full">
        <div className="flex flex-row gap-5">
            <div className="text-2xl font-semibold">${usdPrice}</div>
            <div className={`${(Math.round(change24*100)/100)>0?"bg-green-400 text-green-600":"bg-red-300 text-red-600"} px-2 my-1 text-[0.8rem] rounded-md flex justify-center items-center`}>{Math.round(change24*100)/100} </div><span className="text-gray-400 flex items-center justify-center">&#40;24H&#41;</span>
        </div>
        <div className=" font-medium text-[0.8rem]">{inrPrice}</div>
      </div>
    </div>
  );
};

export default Heading;
