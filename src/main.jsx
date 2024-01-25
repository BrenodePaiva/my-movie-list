import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AppProvaider from './hooks'
import Router from './routes/router'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <AppProvaider>
          <Router />
        </AppProvaider>
      </BrowserRouter>
      <GlobalStyles />
    </React.StrictMode>
  </>
)
