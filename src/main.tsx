import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routes/AppRouter'
import './assets/reset.css'
import './assets/generic.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
)