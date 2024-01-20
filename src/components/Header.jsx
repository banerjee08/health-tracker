import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: red
    }
    return(
        <header>

        <Link className="site-logo" to="/">#Fat2Fitter</Link>
        <nav>
            <NavLink
                to="/activities"
                style={({isActive}) => isActive ? activeStyles : null}
                >
                Activities
            </NavLink>
        </nav>
        </header>
    )
}