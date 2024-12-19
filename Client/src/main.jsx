import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Mycontextprovider } from './context/Mycontext.jsx'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <Mycontextprovider>
    <Toaster/>
    <StrictMode>
      
      <App />
    </StrictMode>
  </Mycontextprovider>
)
