import { About, Contact, Skills, TabView } from "./components";
import Projects from "./components/projects";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const size = useWindowSize()
  const tabs = [
    {
      id: 0,
      name: "Skills",
      component: <Skills />
    },
    {
      id: 1,
      name: "Projects",
      component: <Projects />
    },
    {
      id: 2,
      name: "Contact",
      component: <Contact />
    }
  ]
  return (
    <div className="App">
      <About />
      <Skills />
      <p>{size[0]} : {size[1]}</p>
      <TabView tabs={tabs}>
        <TabView.Tabs>
          {tabs.map(elm => <TabView.Tab key={elm.id} id={elm.id} />)}
        </TabView.Tabs>
        <TabView.Frame>
          <TabView.Body />
        </TabView.Frame>
      </TabView>
    </div>
  );
}

export default App;
