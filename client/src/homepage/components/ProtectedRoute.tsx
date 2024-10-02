import Header from "@/Header/views/Header"
import { Outlet } from "react-router-dom"

function ProtectedRoute() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default ProtectedRoute