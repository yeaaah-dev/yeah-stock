import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home'
import './styles/global.css'
import Card from './components/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>,
)
