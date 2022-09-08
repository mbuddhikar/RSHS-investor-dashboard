import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';// react rouder dom is used to create browser routes

import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import DetailedPughMatrix from './investor/DetailedPughMatrix';
import Pughmatrix from './investor/PughMatrix';
import SurveyResults from './investor/SurveyResults';


{/*creating App functional component */}
function App() {
  return (
  //import Browser Router and creates routings
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detailedpughmatrix" element={<DetailedPughMatrix />} />
        <Route path="/Pughmatrix" element={<Pughmatrix />} />
        <Route path="/SurveyResults" element={<SurveyResults />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;