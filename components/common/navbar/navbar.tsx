import React  from 'react';
import './navbar.module.css';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <Link href="/training"> 
          <a>
            <p> TRAINING LINK </p> 
          </a> 
        </Link>
        <Link href="/"> 
          <a>
            <p> HOME </p> 
          </a> 
        </Link>
      </ul>
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
