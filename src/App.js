import { About, Header } from "./components";
import Tabs from "./containers/tabs-container";


function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <About />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
