
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './contexts/auth';


function App() {
  return (
    
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
