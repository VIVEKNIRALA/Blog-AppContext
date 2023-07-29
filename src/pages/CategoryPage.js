import React from 'react'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>

      <div >
        <button onClick={() => navigation(-1)}>
            Back
        </button>

        <h2>
            Blogs on <span> {category} </span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
