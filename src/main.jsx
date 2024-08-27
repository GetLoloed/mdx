import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Bibliotheque from './pages/Bibliotheque'
import Blocs from './pages/Blocs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/bibliotheque" element={<Bibliotheque />} />
          <Route path="/blocs" element={<Blocs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
