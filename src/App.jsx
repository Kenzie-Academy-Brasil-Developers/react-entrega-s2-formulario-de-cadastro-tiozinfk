import "./App.css";
import { UserProvider } from "./Context/UserContext";

import Rotas from "./routes";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Rotas />
      </UserProvider>
    </div>
  );
}

export default App;
