import React, { useEffect, useState } from "react";
import axios from 'axios';

export const CourseList = () => {
  const [courses , setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () =>{
      try{
        const response = await axios.get('http://localhost:7001/api/course')
        setCourses(response.data)
      } catch(error) {
        console.error(error);
      }
    }

    fetchCourses()


  }, [])

  return(
    <div className="rounder border-2 px-4 my-10 mx-20">
      <h3 className="text-4xl">Наши курсы</h3>
    {courses && courses.length > 0 ? (
      <ul class="flex border-2 rounder flex-wrap items-center">
        {courses.map((item) => (
          <li key={item.id} className="border-2 rounder my-3 mx-3 w-64 h-50 flex p-1 justify-between">
            <div className="grid">
              <h4 className="text-l h-auto text-center">{item.name}</h4>
              {/*<p className="text-center">{item.title}</p>*/}
            </div>
            <img src={item.icon} alt="" className="block ml-auto h-40 w-auto"/>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-red-600">Нет курсов для отображения</p>
    )}
  </div>
  )
}
