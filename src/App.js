import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./components/LoginPage";

const GOOGLE_CLIENT_ID = "1062518206614-ujtqodqes6es0aiuvh7h1dg70eb09la1.apps.googleusercontent.com";

function App() {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <LoginPage />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}

// Create root using React 18+ API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
