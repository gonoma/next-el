import Link from "next/link"
import Navbar from "@components/common/navbar"
import Reading from "./training/[id]";
import { Route, Routes } from "react-router-dom";

export default function Home() {
  console.log("private api url", process.env.API_URL)
  console.log("public api url", process.env.NEXT_PUBLIC_API_URL)
  return (

    <div >

      <Navbar>
      {/* <div className="container">
        <Routes>
          <Route path="/training" element={<Reading />} />
        </Routes>
      </div> */}
      </Navbar>

      <h1 className="text-green-900">
        This is the Home Page
      </h1>

    </div>
  )
}
