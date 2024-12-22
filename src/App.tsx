import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Overview from './pages/Overview'
import Documents from './pages/Documents'
import Yourdocs from './pages/Yourdocs'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Error404 from './pages/Error404'
import Pdf from './pages/pdf'
function App() {
    return (
      <Routes>
        <Route path="/" element={<Pdf />} />
        <Route path='signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="documents" element={<Documents />} />
          <Route path="yourdocs" element={<Yourdocs />} />
          <Route path="settings" element={<Settings/>} />
        </Route>
        <Route path="*" element={<Error404/>}/>
      </Routes>
  )
}

export default App
