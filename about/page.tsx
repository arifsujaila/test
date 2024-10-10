
import Link from "next/link"
import styles from "./about.module.css";


const page = () => {
  return (
    <div>
        <ul>
           <li>
             <Link href="./" >Home</Link>
           </li>
      
           <li>
            <Link href="./contect">Contect Us</Link>
          </li>
        </ul>
      <div className={styles.container}> 
        <h3 className={styles.green}>About us</h3>
      </div>
     
    </div>
  );
};

export default page
