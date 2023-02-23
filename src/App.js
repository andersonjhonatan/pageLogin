import React from "react";
import Authenticador from "./Components/Login.jsx/Authenticador";
import AuthContext from "./Context/AuthContext";

function App() {
  return (
    <AuthContext>
      <Authenticador />
    </AuthContext>
  );
}

export default App;
