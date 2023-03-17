import React from 'react';
import Navbar from './components/Navbar';
import HeroComponent from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <HeroComponent />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}