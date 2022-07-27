import About from './componets/about'
import Footer from './componets/footer'
import Getstart from './componets/getstart'
import Header from './componets/header'
import HomePage from './componets/homepage'
import Portfolio from './componets/portfolio'
import Services from './componets/services'
import Testimonial from './componets/testimonial'

export default function Home() {
  return (
    <>
    <Header/>
    <HomePage/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Getstart/>
    <Footer/>
    </>
  )
}
