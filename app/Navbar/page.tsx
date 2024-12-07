import Link from "next/link"

export default function Navbar(){
    return(
      <nav>
        <p id="webname">SynapticAI</p>
        <ul id="navOption">
          <li id="navLinks"><Link href="/">HOME</Link></li>
          <li id="navLinks"><Link href="/aboutPage">ABOUT US</Link></li>
          <li id="navLinks"><Link href="/contactPage">CONTACT US</Link></li>
        </ul>
      </nav>
    )
  }