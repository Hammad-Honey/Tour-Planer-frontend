import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"; // Importing Provider for Redux
import { store } from "./store/store";  // Importing Redux Store Configuration
import { AuthProvider } from './contexts/AuthContext.jsx'
import { MapProvider } from "./contexts/MapContext";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <AuthProvider>
      <MapProvider> 
        <App />
      </MapProvider>
    </AuthProvider>
  </Provider>

  // </StrictMode>,
)
