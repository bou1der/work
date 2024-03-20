import React from "react";
import {Route,Routes,Navigate,BrowserRouter} from "react-router-dom"
import Main from "./pages/index.jsx";
import Skills from "./pages/Skills.jsx";
import ContactsPage from "./pages/Contacts.jsx";
import NavBar from "./pages/NavBar.jsx";
import PortfolioPage from "./pages/Portfolio.jsx";
import LoadingTerminal from "./components/animations/loading-terminal/Loading-Terminal.jsx";

function App() {
  return (
      <BrowserRouter>
          <div style={{width:"100%",height:"100%",display:"flex",flexFlow:"column nowrap"}}>
          <NavBar/>
              <Routes>
                  <Route path={'*'}  element={<Navigate to={'/'}/>}/>
                  <Route path={'/'} element={<Main/>}/>
                  <Route path={'/test'} element={<LoadingTerminal/>}/>
                  <Route path={'/skills'} element={<Skills/>}/>
                  <Route path={'/portfolio'} element={<PortfolioPage/>}/>
                  <Route path={'/contacts'} element={<ContactsPage/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
