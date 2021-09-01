import { About } from "./components";
import Tabs from "./containers/tabs-container";


function App() {
  return (
    <div className="app">
      <div className="app-container">
        <About />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
