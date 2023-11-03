import React, { useState } from 'react';
import NavBar from './NavBar';
import Item from './item';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Salad');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div>
      <NavBar onCategoryChange={handleCategoryChange} />
      <Item selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
