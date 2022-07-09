import React from 'react'
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Trustee from './components/Trustee';
import Message from './components/Message';
import Object from './components/Object'; 

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Body />
        <About />
        <Trustee />
        <Message />
        <Object />
       
      </div>
    </>
  )
}

export default App;