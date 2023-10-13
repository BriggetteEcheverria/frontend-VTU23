import React, { useEffect, useState } from 'react';
import {
    FaMedal,
    FaBars,
    FaHome,
    FaInfoCircle,
    FaMapMarkedAlt,
    FaEnvelope
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import clienteAxios from '../config/clienteAxios';


const SidebarAsistente = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCorreo, setIsCorreo] = useState(false)
    const toggle = () => setIsOpen(!isOpen);

    const getCorreo = async () => {
        const { data } = await clienteAxios(`/app`)
        if (data.app.actividadCorreos) {
            setIsCorreo(true)
        }
    }

    useEffect(() => {
        getCorreo()
    }, [])


    const menuItem = [
        {
            path: "/",
            name: "Buscar mis logros",
            icon: <FaHome />
        },
        {
            path: "/podio-recompensas",
            name: "Top Huéspedes",
            icon: <FaMedal />
        },
        {
            path: "/itinerario",
            name: "Itinerario",
            icon: <FaMapMarkedAlt />
        },
        {
            path: "/como-jugar",
            name: "Cómo jugar",
            icon: <FaInfoCircle />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                    <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text text-sm">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div hidden={isCorreo ? false : true}>
                <NavLink to="/correos-charla" className="link" >
                    <div className="icon"><FaEnvelope /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text text-sm">Correos Charla</div>
                </NavLink>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SidebarAsistente;