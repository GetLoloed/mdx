import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      </Routes>
      </BrowserRouter>
      </Provider>
  </StrictMode>
)
