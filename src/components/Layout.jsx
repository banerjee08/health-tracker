import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../Styles/Layout.module.css";  

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


// import React from "react"
// import { Outlet } from "react-router-dom"
// import Header from "./Header"
// import Footer from "./Footer"
// import styles from "../Styles/"



// export default function Layout(){
//     return(
//         <div className={styles.wrapper}>
//             <Header />
//             <main>
//                 <Outlet />
//             </main>
//             <Footer />
//         </div>
//     )
// }