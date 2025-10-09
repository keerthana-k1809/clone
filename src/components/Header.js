
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'

const Header = () => {
  const dispatch=useDispatch()
  const toggleHandler=()=>{
    dispatch(toggleMenu())
    

  }

  const[searchQuery,setSearchQuery]=useState('');
  const [suggestions,setsuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);

  

  useEffect(()=>{
    const timer=setTimeout(()=>getSearchSuggestions(),200)
    console.log("API_CALL-"+searchQuery)

    return()=>{
      clearTimeout(timer);

    }

  },[searchQuery])

  const getSearchSuggestions= async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setsuggestions(json[1])
  }
  return (
    <div className='grid grid-flow-col p-5 m-2'>
        <div className='flex col-span-1 '>
        <img onClick={()=>toggleHandler()}className='h-8' src
        ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"/>
        <a href="/">
        <img 
        className="h-8 mx-2 cursor-pointor"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsjQW-pNeBQLkhkLpXFgLRC-wSK-Sf2LjVQ&s"/>
         </a>
        </div>
        <div className='col-span-10'>
          <div>
            <input 
            className='w-1/2 border border-gray-400 rounded-lg px-2'
             type='text' value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)} 
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}></input>
            <button className='border border-gray-400 px-4 ml-1 rounded-lg '>search</button>
            </div>
            {showSuggestions &&(<div className='fixed bg-white py-2 px-5 w-[37rem] rounded-lg border-gray-100' >
              <ul>
                {suggestions.map(s=>
                  (<li key={s} className=' py-2 shadow-sm hover:bg-gray-200'>
                    {s}</li>))}
              </ul>

                

            </div>)}
            </div>
            <div className='col-span-10 px-10'>
            <img className='h-8' 
             src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"/>
        </div>
    </div>

  )
}

export default Header