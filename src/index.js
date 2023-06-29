import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'


const root = document.getElementById('root')

import App from './App'

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)