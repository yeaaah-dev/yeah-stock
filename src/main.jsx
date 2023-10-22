import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home'
import './styles/global.css'
import { Header } from './pages/header/header.jsx'
import styles from '../src/pages/header/header.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Header></Header>
)
