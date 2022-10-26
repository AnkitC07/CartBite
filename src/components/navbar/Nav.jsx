import React from 'react'
import { NavLink } from 'react-router-dom'
import Widgets from '../common/WidgetsDropDown'


import LangSelect from './LangSelect'

const Nav = () => {
  const navdata = [
    {
      title:'Dashboard',
      icon:"Dashboard.png",
      isActive:true,
      renderComponent:"",
      path:"/"
    },
    {
      title:'Widgets',
      icon:"Widget.png",
      isActive:true,
      renderComponent:"",
      path:"/widgets"
    },
    {
      title:'Products',
      icon:"Product.png",
      isActive:true,
      renderComponent:"",
      path:"/product"
    },
    {
      title:'Automation',
      icon:"Automation.png",
      isActive:true,
      renderComponent:"",
      path:"/automation"
    },
    {
      title:'Subscribers',
      icon:"Subscriber.png",
      isActive:true,
      renderComponent:"",
      path:"/subsribers"
    },
    {
      title:'Analytics',
      icon:"analytic.png",
      isActive:true,
      renderComponent:"",
      path:"/analytics"
    }
  ]
  const automationPath = [
    {
      path : '#',
      title : 'SMS'
    },
    {
      path : '/automation',
      title : 'Email'
    }
    
  ]
  const widgetPath = [
    {
      path : '#',
      title : 'Price Drop'
    },
    {
      path : '/backInStock',
      title : "Back In Stock"
    }
  ]

  
  return(
    <>
    <div className="dashboard_top">
      <div className="row dashboard_topArea">
        <div className="dashboard_applogo">
          <a href="#">APP LOGO</a>
        </div>
        <div className="dashboard_topRight">
			<div className="lang_select">
				<LangSelect/>
			</div>
			<div className="bell_icon">
				<a href="#"><i className="fa-solid fa-bell fa-2xl"></i></a>
			</div>
        </div>
      </div>
    </div>
    <div>
      <div className="dashboard_box">
        <ul className="dashboard" id="navBar">
          {navdata.map(x=>{
            return(
                <li key={x.path} id={x.title} className="dashboard_tab">
                  {
                    x.path === "/widgets" 
                    ?
                    <>
                     <Widgets dropDownName={x.title}  path={widgetPath} icon={x.icon}/>
                    </>
                    :
                    <> 
                      {
                        x.path === "/automation"
                        ? 
                        <Widgets dropDownName={x.title}  path={automationPath} icon={x.icon}/>
                        : 
                        <NavLink to={x.path} activeclassname="active"><img src={x.icon} alt="" />{x.title}</NavLink>
                      }
                    </>
                  }
                </li>
            )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Nav