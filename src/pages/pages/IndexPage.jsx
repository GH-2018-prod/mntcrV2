import { HomeCarousel } from "./HomeCarousel"
import { Header } from "./Header"
import { Footer } from "./Footer"



export const IndexPage = () => {
  return (
    <>
      <header> <Header /></header>
      <main><HomeCarousel /></main>
      <footer><Footer /></footer>
    </>
  )
}
