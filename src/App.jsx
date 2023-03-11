import React from 'react';
import Navbar from './components/Navbar';
import HeroComponent from './components/Hero';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <Card />
    </div>
  )
}