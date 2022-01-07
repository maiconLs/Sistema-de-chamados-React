
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './contexts/auth';


function App() {
  return (
    <AuthProvider>
      
    </AuthProvider>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
