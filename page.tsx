
import Link from "next/link"
import style from "./app.module.css"

export default function Home() {
  return (
    <div> 
    <ul>
      <div className={style.div}>
      <li>
        <Link href="./about" className={style.blue}>About Us</Link>

      </li>
      <li>
        <Link href="./contect" className={style.blue}>Contect Us</Link>
      </li></div>
      <h1>My Home Page</h1>

    </ul>
    
    </div>
   
  )
    
  
}
