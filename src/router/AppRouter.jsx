import { Route, Routes } from "react-router-dom"
import { LogInPage } from "../auth"
<<<<<<< HEAD
import { Faqs, TeachersNativos, Testimonios, Classes } from "../pages"
=======
>>>>>>> 1ef7f34adae22af2a9a1cd3f50a52f7ea29595d8
import { Home } from "../pages/pages/Home"


export const AppRouter = () => {

  const authStatus = 'not authenticated'
  return (

    <Routes>
      <Route path="/auth/*" element={ <LogInPage />}/>
      <Route path="/" element={ <Home/>}/>
    </Routes>
    
  )
}