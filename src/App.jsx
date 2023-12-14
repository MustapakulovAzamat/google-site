import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { GooglePage } from "./page/GooglePage"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<GooglePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
