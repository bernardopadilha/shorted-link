import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import "./styles/global.css"
import { ShortLinkProvider } from './context/short-link-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShortLinkProvider>
      <App />
    </ShortLinkProvider>
  </React.StrictMode>,
)
