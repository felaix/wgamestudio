import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/utils/Navigation.jsx'
import AboutPage from './components/pages/AboutPage.jsx'
import MainPage from './components/pages/MainPage.jsx'
import ProjectsPage from "./components/pages/ProjectsPage.jsx";

function App() {
  return (
    
    <Router>
      <div className="h-screen w-screen flex items-center justify-center flex-col bg-gray-900 overflow-x-hidden">
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
