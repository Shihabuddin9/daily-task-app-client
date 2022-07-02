import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDo from './component/pages/ToDo';
import Footer from './component/share/Footer';
import Navbar from './component/share/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateTask from './component/pages/UpdateTask';
import CompletedTasks from './component/pages/CompletedTasks';

function App() {
  return (
    <div className="bg-gray-400">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ToDo></ToDo>}></Route>
        <Route path='/updateTask/:id' element={<UpdateTask></UpdateTask>}></Route>
        <Route path='completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
