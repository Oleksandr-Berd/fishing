import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Components/Header/Head";
import { TitleHeader } from "./Components/Header/TitleHead";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import { Fishes } from "./Components/Fishes/Fishes";
import { FishLocs } from "./Components/FishLocs/FishLocs";

function App() {
  return (
    <div className="App">
      <Header>
        <TitleHeader />
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Navigate to="/home" />}></Route>
            <Route path="home" element={<Home />} />
            <Route path="fishingLocs" element={<FishLocs />} />
            <Route path="fishes" element={<Fishes />} />
          </Route>
        </Routes>
      </Header>
    </div>
  );
}

export default App;
