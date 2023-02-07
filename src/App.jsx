import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import './scss/styles.scss'


export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}
