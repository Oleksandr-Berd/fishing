import "./App.css";
import { Header } from "./Components/Header/Head";
import { TitleHeader } from "./Components/Header/TitleHead";

function App() {
  return (
    <div className="App">
      <Header>
        <TitleHeader />
      </Header>
    </div>
  );
}

export default App;
