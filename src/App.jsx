
import Patients from './PatientsDashboard';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurserAnimate from './CurserAnimation';
import Sidebar from './Sidebar';
function App() {

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<CurserAnimate />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
