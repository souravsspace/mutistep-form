import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./css/tailwind.css"
import { ThemeProvider } from "./components/ThemeProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)