import { NavLink } from "react-router-dom"

function Header() {
  return (
   <header className="flex flex-row justify-between px-10 py-2  text-lg bg-blue-500 text-white">
        <h1>Ur Community</h1>
        <nav className="flex flex-row gap-8 px-5">
            <NavLink to={'/home'} className={({isActive})=>isActive ? "font-semibold underline":"hover:underline"}>Home</NavLink>
            <NavLink to={'/'}>Profile</NavLink>
        </nav>
   </header>
  )
}

export default Header