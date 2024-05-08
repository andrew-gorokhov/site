import React from "react";
import { Home } from "./home/home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddCourseForm from "./course/addcourseform";
import AddNewsForm from "./news/addnews";


export const Main = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcourseform" element={<AddCourseForm />} />
      <Route path="/addnewsform" element={<AddNewsForm />} />
    </Routes>
    
  )
}