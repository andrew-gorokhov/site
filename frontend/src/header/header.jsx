import React from "react";
import {Link} from "react-router-dom"
import logo from "../img/logo.jpg"



const NavMenu = () =>{
  return(
    <div className="dropdown">
      <button className="dropbtn">Меню</button>
      <div className="dropdown-content">
        <Link to="/profile">Профиль</Link>
        <Link to="/program">Программа</Link>
        <Link to="/progress">Успеваемость</Link>
        <Link to="/notes">Заметки</Link>
        <Link to="/settings">Настройки</Link>
        <Link to="/logout">Выход</Link>
      </div>
    </div>
  )
}


export const Header = () => {
  return(
    <header>
      
      <div>
        <a href="#">
        <img src={logo} alt="Главная" className="w-10 h-10 mx-4"/>
        </a>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/addcourseform">Добавить курс</Link>
          </li>
          <li>
            <Link to="/addnewsform">Добавить новость</Link>
          </li>
        </ul>
      </div>
      <nav>
        <NavMenu/>
      </nav>
    </header>
  )
}