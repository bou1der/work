import React from "react";
import {Route,Routes,Navigate,BrowserRouter} from "react-router-dom"
import Main from "./pages/index.jsx";
import Skills from "./pages/Skills.jsx";
import ContactsPage from "./pages/Contacts.jsx";
import NavBar from "./pages/NavBar.jsx";
import PortfolioPage from "./pages/Portfolio.jsx";
import Admin from "./components/admin/admin.jsx";

function App() {
  return (
      <BrowserRouter>
          <div style={{width:"100%",height:"100%",display:"flex",flexFlow:"column nowrap"}}>
          <NavBar/>
              <Routes>
                  <Route path={'*'}  element={<Navigate to={'/'}/>}/>
                  <Route path={'/'} element={<Main/>}/>
                  <Route path={'/skills'} element={<Skills/>}/>
                  <Route path={'/portfolio'} element={<PortfolioPage/>}/>
                  <Route path={'/contacts'} element={<ContactsPage/>}/>
                  <Route path={'/secretword/admin'} element={<Admin/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
