import React, { useState } from 'react';
import './ProductForm.css'; 

const MaterialInput = ({ onAdd }:any) => {
  const [material, setMaterial] = useState({
    name: '',
    unit: '',
    quantity: 0,
    price: 0,
    totalPrice: 0,
    tax: 0,
    totalAmount: 0,
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setMaterial((prev) => ({
      ...prev,
      [name]: value,
      totalPrice: name === 'quantity' || name === 'price' ? material.quantity * material.price : prev.totalPrice,
    }));
  };

  const handleAddMaterial = () => {
    onAdd({
      ...material,
      totalAmount: material.totalPrice + material.tax,
    });
    setMaterial({
      name: '',
      unit: '',
      quantity: 0,
      price: 0,
      totalPrice: 0,
      tax: 0,
      totalAmount: 0,
    });
  };

  return (
    <div className="material-input-container">
      <h3>Add Material</h3>
      <div className="material-input-row">
        <div>
          <label>Material Name</label>
          <input
            type="text"
            name="name"
            value={material.name}
            onChange={handleInputChange}
            placeholder="Enter material name"
          />
        </div>
        <div>
          <label>Unit</label>
          <input
            type="text"
            name="unit"
            value={material.unit}
            onChange={handleInputChange}
            placeholder="Enter unit (kg, gm, etc.)"
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={material.quantity}
            onChange={handleInputChange}
            placeholder="Enter quantity"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={material.price}
            onChange={handleInputChange}
            placeholder="Enter price per unit"
          />
        </div>
        <div>
          <label>Tax</label>
          <input
            type="number"
            name="tax"
            value={material.tax}
            onChange={handleInputChange}
            placeholder="Enter tax amount"
          />
        </div>
      </div>
      <button type="button" onClick={handleAddMaterial}>
        Add Material
      </button>
    </div>
  );
};

export default MaterialInput;
