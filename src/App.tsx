import React from 'react'
import './App.css'
import './components/menu/Menu.styling.css'
import './cards.css'
import './global.css'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import Welcome from './components/welcome/Welcome'
// import ContactMe from './components/contact/ContactMe'
import Datenschutz from './components/privacy/Datenschutz'

function App() {
  return (
    <div id='menuOuterContainer' className='App'>
      <Menu />
      <main id='menuPageWrap'>
        <Header />
        <div className='my-cards'>
          <Welcome />
          {/* <ContactMe /> */}
          <Datenschutz />
        </div>
      </main>
    </div>
  )
}

export default App
