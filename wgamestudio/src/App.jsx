import './App.css'
import LeftSideBar from './components/LeftSideBar.jsx'
import BodyPanel from './components/BodyPanel.jsx'

function App() {

  return (
    <>
      <div className="bg-slate-700 fixed w-full h-full">
      
      <LeftSideBar />
      <BodyPanel />

      </div>
    </>
  )
}

export default App
