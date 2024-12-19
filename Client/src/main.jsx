import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Mycontextprovider } from './context/Mycontext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Mycontextprovider>
    <StrictMode>
      <App />
    </StrictMode>
  </Mycontextprovider>
)
