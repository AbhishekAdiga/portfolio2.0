import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root")

  if (!rootElement) {
    console.error("Root element with id 'root' not found in the DOM")
    // Create root element if it doesn't exist
    const newRoot = document.createElement("div")
    newRoot.id = "root"
    document.body.appendChild(newRoot)

    createRoot(newRoot).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } else {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
})

// Fallback if DOM is already loaded
if (document.readyState === "loading") {
  // DOM is still loading, event listener will handle it
} else {
  // DOM is already loaded
  const rootElement = document.getElementById("root")

  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
}
