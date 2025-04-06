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
import DocsViewMore from './pages/Doc_viewmore'
// import Meta_login from './pages/meta_login'
import UploadDocs from './pages/UploadDocs'
import GetDoc from './pages/GetDoc'
import Home from './pages/Home'
import AuthRoute from './routes/AuthRoute'
import Delock from './pages/delock'
import Issuers from './pages/Issuers'
import AdminOverview from './pages/AdminOverview'
import CustomFormPage from './pages/CustomFormPage'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />

      {/* Protected User Routes */}
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="documents" element={<Documents />} />
        <Route path="yourdocs" element={<Yourdocs />} />
        <Route path="documents/issuers" element={<Issuers />} />
        <Route path="documents/issuers/:departmentCode" element={<DocsViewMore />} />
        <Route path="documents/issuers/:departmentCode/:documentCode" element={<GetDoc />} />
        <Route path="yourdocs/:folderId" element={<Yourdocs_viewmore />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        }
      >
        <Route index element={<AdminOverview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="upload" element={<UploadDocs />} />
        <Route path="schema" element={<CustomFormPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Error404 />} />
      {/* <Route path="/superadmin" element={<Delock />} />  */}
    </Routes>
  )
}

export default App
