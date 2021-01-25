import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './sass/index.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
