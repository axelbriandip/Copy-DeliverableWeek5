import { HashRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import RickMorty from "./components/RickMorty";
import UserInput from "./components/UserInput";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./styles.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/rickmorty" element={<RickMorty />} />
          <Route path="/rickmorty/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
