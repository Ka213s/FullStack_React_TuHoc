
import { Outlet } from "react-router-dom"
import Header from "./component/layout/header"
import axios from "./util/axios.customize"
import { useEffect } from "react"


function App() {
  useEffect(() => {

    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`)
      console.log(">>> check : ", res)
    }
    fetchHelloWorld()
  }, [])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
