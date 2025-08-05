// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // RESULTS IN PAGES BEING LOADED TWICE; DUE TO USE EFFECT RUNNIGN TWICE; MIGHT WANT TO ADD CLEAN UP TO USE EFFECT INSTEAD
  // <StrictMode>
    <App />
  // </StrictMode>,
)
