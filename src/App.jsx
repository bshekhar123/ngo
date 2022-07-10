import React from 'react'
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Trustee from './components/Trustee';
import Message from './components/Message';
import Object from './components/Object'; 
import Work from './components/Work';
import Footer from './components/Footer';

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
        <Work />
        <Footer />
      </div>
    </>
  )
}

export default App;