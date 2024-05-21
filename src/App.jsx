import './App.css'
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

function App() {

  return (
    <>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">User 1</a>
        </li>
        <li>
          <a href="">User 2</a>
        </li>
      </ul>
    </>
  )
}

export default App
