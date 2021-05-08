import React, { useState, useContext, createContext } from 'react'

const TabContext = createContext()

export default function TabView({children, tabs, ...restProps}) {
  const [tab, setTab] = useState(tabs[0].id)

  return (
    <TabContext.Provider value={{tab, tabs, setTab}}>
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
  const [sliderPos, setSliderPos] = useState(15)
  return (
    <div className="tabs-container">
      <div onClick={(e) => {
        setSliderPos(e.target.offsetLeft - 5)
      } } className="tabs" {...restProps}>{children}
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
  const {tab, setTab, tabs} = useContext(TabContext)
  return (
    <div id={id} className={tab === id ? 'tab active-tab' : 'tab'} onClick={() => {
      setTab(id)
    }} {...restProps}>
      {tabs[id].name}
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

