import { Route, Routes } from "react-router-dom"
import { LogInPage } from "../auth"
import { Faqs, TeachersNativos, Testimonios, Classes } from "../pages"
import { Home } from "../pages/pages/Home"


export const AppRouter = () => {

  const authStatus = 'not authenticated'
  return (

    <Routes>
      <Route path="/auth/*" element={ <LogInPage />}/>
      <Route path="/" element={ <Home/>}/>
      <Route path="/teachers" element={ <TeachersNativos />}/>
      <Route path="/clases" element={ <Classes />}/>
      <Route path="/faqs" element={ <Faqs />}/>
      <Route path="/testimonios" element={ <Testimonios />}/>

    </Routes>
    
  )
}