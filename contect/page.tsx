
import Link from "next/link"


function page() {
  return (
    <div>
           <ul>
             <li>
                 <Link href="./">Home</Link>
             </li>
             <li>
                <Link href="./about" >About Us</Link>
            </li>
           
        </ul>
      <ul>
            <li>
                <Link href="./contect/service">Our Service</Link>
            </li>
        </ul>
      <h2>Contect</h2>
    </div>
  )
}

export default page
