import { About, Contact, Skills, TabView } from "./components";
import Projects from "./components/projects";

function App() {
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
    <div className="app">
      <div className="app-container">
        <About />
        <TabView tabs={tabs}>
          <TabView.Tabs>
            {tabs.map(elm => <TabView.Tab key={elm.id} id={elm.id} name={elm.name}/>)}
          </TabView.Tabs>
          <TabView.Frame>
            <TabView.Body />
          </TabView.Frame>
        </TabView>
      </div>
    </div>
  );
}

export default App;
