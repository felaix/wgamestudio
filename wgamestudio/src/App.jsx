import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation.jsx'
import AboutPage from './components/AboutPage.jsx'
import MainPage from './components/MainPage.jsx'
import ProjectsPage from "./components/ProjectsPage.jsx";

function App() {
  return (
    
    <Router>
      <div className="h-full w-full flex items-center justify-center flex-col bg-gray-900 overflow-y-hidden">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
