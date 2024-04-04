import LeftSideBar from './components/LeftSideBar.jsx'
import Home from './components/Home.jsx'
import Games from './components/Games.jsx'

function App() {
  return (
    <div className="h-screen flex bg-black">
      <LeftSideBar />
      <div className="flex-1 bg-slate-900 flex justify-center items-center">
        <Home></Home>
        <Games></Games>
      </div>
    </div>
  )
}

export default App
