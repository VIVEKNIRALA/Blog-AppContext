import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"
import BlogDetails from './BlogDetails';

const Blogs = () => {
    
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);


  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[270px] mb-[270px]  justify-center items-center'>
    {
        loading ? 

        (<Spinner />) : 

        (   
            posts.length === 0 ? 
            (<div>
                <p>No Post Found</p>
            </div>) : 
            (posts.map( (post) => (
                <BlogDetails key={post.id} post={post}/>
            ) ))
        ) 
    }
      
    </div>
  )
}

export default Blogs
