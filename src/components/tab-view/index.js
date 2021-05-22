import React, { useState, useContext, createContext, useEffect } from 'react'
import useWindowSize from "../../hooks/useWindowSize";

const TabContext = createContext()

export default function TabView({children, tabs, ...restProps}) {
  const [tab, setTab] = useState(1)
  const [sliderPos, setSliderPos] = useState(0)
  const [target, setTarget] = useState(document.getElementsByName("Projects"))
  

  return (
    <TabContext.Provider value={{setTarget, tab, tabs, setTab, sliderPos, setSliderPos, target}}>
      <div className="container" {...restProps}>
          <div className="inner">{children}</div> 
      </div>
    </TabContext.Provider>
  )
}

TabView.Frame = function TabViewFrame({children, ...restProps}) {
  return <section className="dashboard__frame" {...restProps}>{children}</section>
}

TabView.Tabs = function TabViewTabs({children, ...restProps}) {
  const {sliderPos, target, setSliderPos} = useContext(TabContext)
  const size = useWindowSize()

  useEffect(() => {
    let offset = target.offsetLeft || 36
    offset !== sliderPos && setSliderPos(offset)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])
        
  return (
    <div className="tabs-container">
      <div className="tabs" {...restProps}>{children}
      </div>
      <div className="slider-container">
        <div 
          className="slider" 
          style={{transform: `translateX(${sliderPos}px)`}}
        ></div>
      </div>      
    </div>
      
  )
}

TabView.Title = function TabViewTitle({children, ...restProps}) {
  const {tab, tabs} = useContext(TabContext)
  return <h1 className="title" {...restProps}>{tabs[tab].name.toUpperCase()}</h1>
}

TabView.Tab = function TabViewTab({children, id, ...restProps}) {
  const {tab, setTab, tabs, setSliderPos, setTarget} = useContext(TabContext)

  return (
    <div id={id} className={tab === id ? 'tab active-tab' : 'tab'} onClick={(e) => {
      setTab(id)
      setSliderPos(e.target.offsetLeft - 3)
      setTarget(e.target)
    }} {...restProps}>
      <h3>{tabs[id].name}</h3>
    </div>
  )
}

TabView.Body = function TabViewBody({children, ...restProps}) {
  const {tab, tabs} = useContext(TabContext)
  
  return (
    <div className='tab-body' {...restProps}>
      {tabs[tab].component}
    </div>
  ) 
}

