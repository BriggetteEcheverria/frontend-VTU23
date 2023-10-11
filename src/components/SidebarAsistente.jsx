import React, { useState } from 'react';
import {
    FaMedal,
    FaBars,
    FaHome,
    FaInfoCircle,
    FaMapMarkedAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const SidebarAsistente = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Buscar mis logros",
            icon:<FaHome/>
        },
        {
            path:"/podio-recompensas",
            name:"Top Huéspedes",
            icon:<FaMedal/>
        },
        {
            path:"/itinerario",
            name:"Itinerario",
            icon:<FaMapMarkedAlt/>
        },
        {
            path:"/como-jugar",
            name:"Cómo jugar",
            icon:<FaInfoCircle/>
        },
        {
            path:"/correos-charla",
            name:"Correos Charla",
            icon:<FaInfoCircle/>
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
                       <NavLink to={item.path} key={index} className="link" >
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