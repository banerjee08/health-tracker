import React from "react"
import { Link, NavLink } from "react-router-dom"
import styles from "../Styles/Header.module.css";  

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <header>
            <Link className={styles.siteLogo} to="/"><strong>#FAT2</strong>Fitter</Link>
            <nav>
                <NavLink
                    to="/activities"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Activities
                </NavLink>
                <NavLink
                    to="/daily"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Daily
                </NavLink>
                <NavLink
                    to="/weekly"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Weekly
                </NavLink>
            </nav>
        </header>
    )
}