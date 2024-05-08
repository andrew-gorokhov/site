import React from "react";
import { NewsList } from "./newslist";
import { CourseList } from "./courselist";

export const Home = () => {
  return(
    <section>
      <NewsList/>
      <CourseList/>
    </section>
  )
}