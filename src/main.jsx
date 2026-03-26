// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"; // Importing Provider for Redux
import { store } from "./store/store";  // Importing Redux Store Configuration
import { MapProvider } from "./contexts/MapContext";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
  
      <MapProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MapProvider>

  </Provider>

  // </StrictMode>,
)
