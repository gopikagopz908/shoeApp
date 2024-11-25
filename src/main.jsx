import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Context from './context/useContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <App />
    </Context>
  
  </StrictMode>,
)
