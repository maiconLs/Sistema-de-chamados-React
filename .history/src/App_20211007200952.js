
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './contexts/auth';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
