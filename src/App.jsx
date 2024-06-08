import { useState } from "react";
import AppRoutes from "./routes/Routes"
import Login from "./pages/Login";

function App() {

  // const [token, setToken] = useState(null);

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <>
      <AppRoutes />

    </>
  )
}

export default App
