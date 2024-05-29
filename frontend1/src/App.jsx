import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from "./pages/Login"
//import {Registration} from "./pages/Registration"
import Interesting from "./pages/Interesting"
import NotFound from "./pages/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css'
function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Registration />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/interesting"
          element={
            <ProtectedRoute>
              <Interesting />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App