import React from 'react';
import Navigationbar from './components/Navigationbar';
import './App.css';
import Mainphoto from './components/Mainphoto';
import Card from "./components/Card"
import data from './data'

export default function App() {
  const cards = data.map(item => {
    return (
          <Card
            key= {item.id}
            img = {item.coverImg}
            rating={item.rating}
            reviewCount= {item.stats.reviewCount}
            location={item.location} 
            title={item.title}
            price={item.price}
          />)})

  
    return (
    <div>
        <Navigationbar/>
        <Mainphoto/>
        <section className="cards--list">{cards}</section>
        
    </div>
  );
}
