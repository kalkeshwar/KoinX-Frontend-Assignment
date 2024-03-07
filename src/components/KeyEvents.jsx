import React from 'react'
import { ArrowLeft, ArrowRight } from './Icon'

const KeyEvents = () => {
  return (
    <div className='w-full bg-white flex justify-between overflow-hidden overflow-x-scroll no-scrollbar relative'>
        <div className='w-10 h-10 border border-gray-200 bg-white rounded-full sticky top-[40%] left-10 shadow-xl'><ArrowRight className={`w-10 h-10`}/></div>
        <div className='flex flex-row gap-10 items-center justify-center p-5'>
            <div className='flex flex-row bg-blue-100 text-black w-[30rem] h-[12rem] rounded-md p-3 gap-2'>
                <div className='h-full w-[30%]'>
                    <img src="/paper.svg" alt="" className='w-20 h-20 rounded-md'/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-medium flex-wrap flex ">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
                    <div className=" flex-wrap flex text-[0.9rem]">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                </div>
            </div>
            <div className='flex flex-row bg-green-100 text-black w-[30rem] h-[12rem] rounded-md p-3 gap-2'>
                <div className='h-full w-[30%]'>
                    <img src="/sensexarrow.svg" alt="" className='w-20 h-20 rounded-md'/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-medium flex-wrap flex ">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
                    <div className=" flex-wrap flex text-[0.9rem]">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                </div>
            </div>
            <div className='flex flex-row bg-blue-100 text-black w-[30rem] h-[12rem] rounded-md p-3 gap-2'>
                <div className='h-full w-[30%]'>
                    <img src="/paper.svg" alt="" className='w-20 h-20 rounded-md'/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-medium flex-wrap flex ">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
                    <div className=" flex-wrap flex text-[0.9rem]">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                </div>
            </div>
            <div className='flex flex-row bg-green-100 text-black w-[30rem] h-[12rem] rounded-md p-3 gap-2'>
                <div className='h-full w-[30%]'>
                    <img src="/sensexarrow.svg" alt="" className='w-20 h-20 rounded-md'/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-medium flex-wrap flex ">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
                    <div className=" flex-wrap flex text-[0.9rem]">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                </div>
            </div>
        </div>
        <div className='w-10 h-10 border border-gray-200 bg-white shadow-xl rounded-full sticky top-[40%] right-10'><ArrowLeft className={`w-10 h-10`}/></div>
    </div>
  )
}

export default KeyEvents