import React from "react";
import {Route,Routes,Navigate,BrowserRouter} from "react-router-dom"
import Main from "./pages/index.jsx";
import Skills from "./pages/Skills.jsx";
import Contacts from "./pages/Contacts.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import NavBar from "./pages/NavBar.jsx";

function App() {
  return (
      <BrowserRouter>
          <div style={{width:"100%",height:"100%",display:"flex",flexFlow:"column nowrap"}}>
          <NavBar/>
              <Routes>
                  <Route path={'*'}  element={<Navigate to={'/'}/>}/>
                  <Route path={'/'} element={<Main/>}/>
                  <Route path={'/skills'} element={<Skills/>}/>
                  <Route path={'/portfolio'} element={<Portfolio/>}/>
                  <Route path={'/contacts'} element={<Contacts/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
