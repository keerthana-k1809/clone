import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'
import { addMessage } from '../utils/chatSlice'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName } from '../utils/helper'


const LiveChat = () => {
  const dispatch=useDispatch();
  const chatMessages=useSelector( (store)=>store.chat.messages);

  const [liveMessage,setLiveMessage]=useState('')

  useEffect(()=>{
    const i=setInterval(()=>{
      dispatch(addMessage({
        name:generateRandomName(),
        message:"This is the react series of namastey-react"
      } ))
    

    },1000);
    return()=>clearInterval(i)

  })
  return (
    <>
    <div className=' w-full h-[600px] ml-2 p-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex-col-reverse'>
        <div>
          {chatMessages.map((c,i)=>(
            <ChatMessage key={i} name={c.name} message={c.message} /> 

          ))}
        

      
            </div>
            
            </div>
            <form>
            <div className='w-full p-2 ml-2 pt-2 mt-4 border border-black' onSubmit={(e)=>{e.preventDefault()
              dispatch(
                addMessage({
                  name:"Keerthi",
                  message:liveMessage,
                })
              )
            }}>
              <input type="text w-50" value={liveMessage} onChange={(e)=>{
                setLiveMessage(e.target.value)
              }}></input>
              <button className='px-2 mx-2 bg-green-200'>search</button>
    </div>
    </form>
    </>
  )
}

export default LiveChat