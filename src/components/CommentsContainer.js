
import React from 'react'

const commentsData=[
    {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        reolies:[  {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[],

    },
]

    },
    {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[
                {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[],

    },
        ]

    },
    {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[
                {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[],

    },
        ]

    },
    {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[
                {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[],

    },
        ]

    },
    {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[
                {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[],

    },

        ]

    },
    {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[
                {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[],

    },
        ],

    },
    {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[
                {
        name:"Keerthana",
        text:"Lorem ipsum dolor sit amet,consectetur adip ",
        replies:[],

    },
        ]

    },
]

const Comment=({data})=>{
    const {name,text,replies}=data;
    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12'  src=
        "https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
    )
    

}

const CommentsList=({comments})=>{
    return comments.map((comment,index)=>
          <Comment key={index} data={comment} />

    )

}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer