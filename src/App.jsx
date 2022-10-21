import React from 'react'

//Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'

//Pages
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <About/> 
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App
