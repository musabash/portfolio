import { Skills, TabView } from "../components";
import Projects from "../components/projects";
import ContactMe from "../contact-me";

export default function Tabs() {
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
      component: <ContactMe />
    }
  ]
  return (
    <>
      <TabView tabs={tabs}>
        <TabView.Tabs>
          {tabs.map(elm => <TabView.Tab key={elm.id} id={elm.id} name={elm.name}/>)}
        </TabView.Tabs>
        <TabView.Frame>
          <TabView.Body />
        </TabView.Frame>
      </TabView>
    </>
  );
}