import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from './components/Dashboard';
import LoginPageForm from './components/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPageForm />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>

  );
}
export default App;
