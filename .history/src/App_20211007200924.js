
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './co'
function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
