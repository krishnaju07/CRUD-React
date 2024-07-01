import React, { useState } from 'react';
import './style.css';

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItem = () => {
    if (currentItem.trim() !== '') {
      setItems([...items, currentItem]);
      setCurrentItem('');
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const editItem = (index) => {
    setCurrentItem(items[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const updateItem = () => {
    const newItems = items.map((item, i) =>
      i === editIndex ? currentItem : item
    );
    setItems(newItems);
    setCurrentItem('');
    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <div>
        <input type="text" value={currentItem} onChange={handleInputChange} />
        {isEditing ? (
          <button onClick={updateItem}>Update Item</button>
        ) : (
          <button onClick={addItem}>Add Item</button>
        )}
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
