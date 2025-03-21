import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Overview from './pages/Overview'
import Documents from './pages/Documents'
import Yourdocs from './pages/Yourdocs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Error404 from './pages/Error404'
import Yourdocs_viewmore from './pages/Yourdocs_viewmore'
// import Meta_login from './pages/meta_login'
import Delock from './pages/delock'
import UploadDocs from './pages/UploadDocs'
import GetDoc from './pages/GetDoc'
import Home from './pages/Home'
function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='superadmin' element={<Delock />} />
        <Route path='signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="documents" element={<Documents />} />
          <Route path="yourdocs" element={<Yourdocs />} />
          <Route path="yourdocs/education" element={<Yourdocs_viewmore />} />
          <Route path="settings" element={<Settings />} />
          <Route path="getdoc" element={<GetDoc />} /> {/* Add ViewMore route */}
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="upload" element={<UploadDocs/>}/>
        </Route>
        <Route path="*" element={<Error404/>}/>
      </Routes>
  )
}

export default App
