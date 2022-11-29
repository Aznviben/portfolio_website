import React from 'react'

//Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'

//Pages
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Articles from './pages/Articles/Articles'

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <About/> 
    <Articles/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App
