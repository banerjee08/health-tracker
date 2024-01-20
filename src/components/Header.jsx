import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }
    return(
        <header>
            <Link className="site-logo" to="/">#FAT2Fitter</Link>
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