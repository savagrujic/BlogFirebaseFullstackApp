import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/home'
import Login from './Pages/login'
import CreatePost from './Pages/CreatePost'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'


function App() {
  const [isAuth, setisAuth] = useState(false)
  const [img, setImg] = useState('')
  const logout = () => {
    signOut(auth)
    localStorage.clear()
    setisAuth(false)
    window.location.pathname = '/login'
  }

  useEffect(()=> {
    setisAuth(localStorage.getItem('isAuth'))
   
  
      setTimeout(() => {
        setImg(auth.currentUser.photoURL)
      }, 300);

    
  })
  return (
    <Router>
      <nav>
        <h1 className='logo'>Echo<span className='bluelogo'>Post</span></h1>
        <Link to='/'>Home</Link>
       {isAuth ?  <Link to='/createpost'>Create Post</Link>: ''}
        {isAuth ? <button onClick={logout} className='btn'>Log Out</button>: (<Link to='/login'>Login</Link>)}
        {isAuth ? <img src={img} />:  ''}
      </nav>
      <Routes>
        <Route path='/' element = {<Home isAuth = {isAuth} />} />
        <Route path='/login' element = {<Login setisAuth= {setisAuth} />} />
        <Route path='/createpost' element = {<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  )
}

export default App
