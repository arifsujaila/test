
import Link from "next/link"

function page() {
  return (
    <div>
        <ul>
            <li>
                <Link href="../" >Home</Link>
            </li>
            <li>
                <Link href="../about" >About Us</Link>
            </li>
            <li>
                <Link href="./" >Contect us</Link>
            </li>
        </ul>
      <h1>Devolper</h1><span><h1>Web Designing</h1></span><br /><span><h2>Amazon Product Hunting</h2></span>
    </div>
  )
}

export default page
