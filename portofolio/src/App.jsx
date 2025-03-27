import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/header/header'
import About from './components/About/About'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
function App() {


  return (
    <Fragment>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Team/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default App
