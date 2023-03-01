import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Components/Header/Head";
import { TitleHeader } from "./Components/Header/TitleHead";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import { Fishes } from "./Components/Fishes/Fishes";
import { RegionList } from "./Components/RegionList/RegionList";
import { FishingLocationsList } from "./Components/FishingLocations/FishinglocationsList";
import { Footer } from "./Components/Footer/Footer";
import { PreciseLocation } from "./Components/FishingLocations/PreciseLocation/PreciseLocation";
import { NewData } from "./Components/NewData/NewData";

function App() {
  return (
    <div className="App">
      <Header>
        <TitleHeader />
      </Header>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Navigate to="/home" />}></Route>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="region" element={<RegionList />} />
        <Route path="region/:path" element={<FishingLocationsList />} />
        <Route path="region/:path/:_id" element={<PreciseLocation />} />
        <Route path="newData" element={<NewData />} />
        <Route path="fishes" element={<Fishes />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
