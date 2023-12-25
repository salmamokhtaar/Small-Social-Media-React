import React from 'react';
import { useState , useRef } from 'react';
import Post from './Post'
function Form() {
    const [isOpen,setIsOpen]= useState(false)
    const [title,setTitle]= useState("")
    const [image,setImage]= useState(null)



    

    const handleIsOpen = () => {
        // document.body.style.backgroundColor="#FAE7C9"
        // document.body.style.backdropFilter="0.5"
     setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
       }
       const imageRef = useRef()
    //storing data from the form
       const [post,setPost]= useState([])
       const handlePost = (e) => {
        e.preventDefault()
        //  document.body.style.backgroundColor="white";
        const newPost={title,image}
        console.log(newPost)
        if(title != "" && image != "") {
            setPost([newPost,...post])
            setTitle("")
            imageRef.current.value = ""
            setIsOpen(false)
    }
    // elemt ref u sameyso si waxx looga badalo
}
  return ( <div>
      <button onClick={handleIsOpen} className='w-[60px] rounded-full pb-4 h-[60px] bg-blue-600 text-white text-5xl fixed right-4 bottom-4 '> + </button>
<div style={{ display: isOpen === true ? "block" : "none"}} className='bg-blue-500
 px-10 pb-10 mx-[30%] rounded mt-6 absolute hidden'>

<i  onClick={handleClose} class="fa-solid ml-[470px] text-white text-4xl fa-xmark"></i>
    <form>
       <input value={title} onChange={(event) =>{setTitle(event.target.value);}}className='h-[50px] w-[300px] ' type="text"  placeholder='Enter title'/>
         <br/>

         
    <input ref={imageRef}  onChange={(e)=>{setImage(e.target.files[0]);}}
    className='mt-5 file:bg-purple-500 file:border-0 file:p-3 file:rounded' type="file"/>
    <br/>
     <button onClick={handlePost} 
     className='bg-white mt-10 px-10 text-3xl py-2 rounded-xl hover:bg-purple-600' >Post</button>
    </form>
    </div>


  
    {
        post.map ((item ) => {
            return isOpen === true ? "" : <Post
            title = {item.title}
            image = {URL.createObjectURL(item.image)} />

        }
    
  )
  
}
     </div>
  )  
}

export default Form
