// import React  from 'react';
import './navbar.module.css';
import Link from "next/link";

const Navbar = (props: any) => {
  return (
    <nav className="nav">
      <ul>
        <Link href="/training"> 
          <a>
            <p> TRAINING LINK </p> 
          </a> 
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

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
