import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
import SigninScreen from './pages/SigninScreen'
import SignupScreen from './pages/SignupScreen'
import ProfileScreen from './pages/ProfileScreen'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/sign-in' element={<SigninScreen />} />
      <Route path='/sign-up' element={<SignupScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
    </Routes>
  </BrowserRouter>
}

export default App
