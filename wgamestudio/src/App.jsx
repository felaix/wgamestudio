import LeftSideBar from './components/LeftSideBar.jsx'
import BodyPanel from './components/BodyPanel.jsx'

function App() {
  return (
    <div className="h-screen flex bg-black">
      <LeftSideBar />
      <div className="flex-1 bg-slate-900 flex justify-center items-center">
        <BodyPanel />
      </div>
    </div>
  )
}

export default App
