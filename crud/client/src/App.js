import './App.css';
//components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import CodeArunPandey from './components/CodeArunPandey';
import AllUsers from './components/AllUsers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeArunPandey />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
