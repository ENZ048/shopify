
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css'
import AuthPage from './pages/Auth/AuthPage';

function App() {
  

  return (
    <>
     <ToastContainer position="top-center" autoClose={3000} />
     <AuthPage/>
    </>
  )
}

export default App
