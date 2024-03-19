import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero-section/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title  subTitle="Our Program"  title="What we offer"/>
       <Programs />
      </div>
     
    </div>
  )
}

export default App
