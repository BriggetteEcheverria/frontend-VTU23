import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const SidebarAsistente = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Buscar mis logros",
            icon:<FaTh/>
        },
        {
            path:"/podio-recompensas",
            name:"Top Huéspedes",
            icon:<FaUserAlt/>
        },
        {
            path:"/itinerario",
            name:"Itinerario",
            icon:<FaRegChartBar/>
        },
        {
            path:"/itinerario",
            name:"Cómo jugar",
            icon:<FaCommentAlt/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text text-sm">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SidebarAsistente;