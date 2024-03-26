// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero-section/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/title'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title  subTitle="Our Program"  title="What we offer"/>
        <Programs />
        <About />
      </div>
     
    </div>
  )
}

export default App
