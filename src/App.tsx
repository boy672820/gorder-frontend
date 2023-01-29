import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Router from './routes';
import ThemeProvider from './theme';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
