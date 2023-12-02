import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from '~/components/GlobalStyles'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalStyles>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalStyles>,
)
