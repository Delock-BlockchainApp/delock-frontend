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
function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="documents" element={<Documents />} />
          <Route path="yourdocs" element={<Yourdocs />} />
          <Route path="settings" element={<Settings/>} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
  )
}

export default App
