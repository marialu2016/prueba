// import react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import react router dom
import { BrowserRouter } from 'react-router-dom';

// import proyecto
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)