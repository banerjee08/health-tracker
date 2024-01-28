import React from "react"
import { Link } from "react-router-dom"
import styles from "../Styles/Home.module.css"
import image from "../../src/assets/workout.png"

function Home(){
    return (
        <div className={styles.homeContainer}>
            <img src={image}/>
            <h1>Elevate your well-being: Where fitness meets lifestyle in one app!</h1>
            <p>
                Add adventure to your daily life by keeping a track of your daily activities with #Fat2Fitter.
            </p>
            <Link to="activities">Find your mojo</Link>
        </div>
    )
} 

export default Home