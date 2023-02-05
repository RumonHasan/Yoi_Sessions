import React from 'react';
// calling the website components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  // this part is the js part

  return (
    <div className="main-app-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
