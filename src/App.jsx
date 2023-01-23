import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Navbar, NavbarTop, Projects, About, Contact } from './comps'
import { createContext, useState } from 'react'
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from './comps/ScrollToTop'


export const ThemeContext = createContext(null)

function App() {

  const [ theme , setTheme ] = useState('dark')
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='lightmode-fixed'>
          <div className="lightmode">
            <Switch onColor='#202020' offColor='#202020' onChange={toggleTheme} checked={theme === 'dark'} 
              uncheckedIcon={<FontAwesomeIcon icon={faMoon} color='white' style={{
              paddingTop: 5, paddingLeft: 10
            }}/>} checkedIcon={<FontAwesomeIcon icon={faSun} color='white' style={{
              paddingTop: 6, paddingLeft: 5
            }} />}/>
          </div>
        </div>
        <div className='lightmode-fixed-top'>
          <div className="lightmode-top">
            <Switch onColor='#202020' offColor='#202020' onChange={toggleTheme} checked={theme === 'dark'} 
              uncheckedIcon={<FontAwesomeIcon icon={faMoon} color='white' style={{
              paddingTop: 5, paddingLeft: 10
            }}/>} checkedIcon={<FontAwesomeIcon icon={faSun} color='white' style={{
              paddingTop: 6, paddingLeft: 5
            }} />}/>
          </div>
        </div>
        <ScrollToTop />
        <NavbarTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
