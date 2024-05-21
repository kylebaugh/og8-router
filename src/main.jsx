import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import UserProfile from './components/UserProfile'

const users = {
  1: {
    name: 'Sir Lancelot',
    hobby: 'Seeking the Holy Grail',
    funFact: 'Raised in a fairy land by the Lady of the Lake',
  },
  2: {
    name: 'Sir Robin',
    hobby: 'Running away',
    funFact: 'Nearly stood up to the vicious Chicken of Bristol',
  },
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About />}/>
      <Route
        path='/user/:id'
        element={<UserProfile />}
        loader={(request) => {
          return users[request.params.id]
        }}
        />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
