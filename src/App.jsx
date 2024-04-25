import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import { AuthProvider } from "./context/AuthContext"; ;
import Navbar1 from "./pages/components/Navbar1";
import Home from "./pages/Home";
import EditTask from "./pages/Edit task";
import NewTask from "./pages/NewTask";
import AllTask from "./pages/AllTask";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar1 />
          <Routes>

            <Route path="/" element={<Home/> } />
            <Route path="/tasks" element={<AllTask/>} />
            <Route path="/new" element={<NewTask/>} />
            <Route path="/edit/:id" element={<EditTask/>} />
            <Route path="*" element={<Error404/>} />
           
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
