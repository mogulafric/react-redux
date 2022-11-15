import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/UsersList'
import ResetPassword from './features/auth/ResetPassword'
import NoAccess from './features/noAccess/NoAccess'
import UpdateProfile from './features/auth/UpdateProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="resetpassword" element={<ResetPassword />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
          <Route path="noaccess" element={<NoAccess />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App;
