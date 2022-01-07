import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './contexts/auth';
import { ToastContainer} from 'react-toastify'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer>
      <Routes/>
      <ToastContainer/>
    </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;