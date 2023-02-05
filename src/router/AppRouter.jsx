import { Route, Routes } from "react-router-dom"
import { LogInPage } from "../auth"
import { IndexPage } from "../pages"



export const AppRouter = () => {

  const authStatus = 'not authenticated'
  return (

    <Routes>
      <Route path="/auth/*" element={ <LogInPage/>}/>
      <Route path="/*" element={ <IndexPage/>}/>

    </Routes>
    
  )
}