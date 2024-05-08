import React, { useEffect, useState } from "react";
import axios from 'axios';


export const NewsList = () => {
  const [news , setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () =>{
      try{
        const response = await axios.get('http://localhost:7001/api/news')
        setNews(response.data)
      } catch(error) {
        console.error(error);
      }
    }
    fetchNews()
  }, [])

  return(
    <div className="rounder border-2 px-4 mx-20 my-10">
      <h3 className="text-4xl">Новости</h3>
    {news && news.length > 0 ? (
      <ul className="flex border-2 rounder flex-wrap">
        {news.map((item) => (
          <li key={item.id} className="border-2 rounder my-3 mx-3 w-56 h-70 grid p-1">
            <a href="https://ya.ru/"><img src={item.icon} alt="" className="block mx-auto h-40 w-auto"/>
            <h4 className="text-xl h-auto text-center line-clamp-2 overflow-hidden">{item.title}</h4></a>
            {/*<p className="text-l h-auto text-center line-clamp-1 verflow-hidden">{item.text}</p>*/}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-red-600">Нет новостей для отображения</p>
    )}
  </div>
  )
}
