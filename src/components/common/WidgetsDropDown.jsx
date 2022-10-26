import { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

const Widgets = ({ dropDownName, path, icon }) => {
  // const handelClick = useCallback(() => {
  //   // document.getElementById('dropdownMenuButton1').classNameList.toggle('active')
  // },[])

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={icon} alt="" />
        {dropDownName}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <a className="dropdown-item" href={path[0].path}>
          <li>{path[0].title}</li>
        </a>
        <NavLink to={path[1].path}>
          <li className="dropdown-item">{path[1].title}</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Widgets
