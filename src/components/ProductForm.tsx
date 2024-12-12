import React, { FormEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../feature/productSlice';
import MaterialInput from './MaterialInput';
import { useNavigate } from 'react-router-dom';
import './ProductForm.css';

const ProductForm = ({ productId, product }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(product || { name: '', category: '', materials: [], expiry: '', totalCost: 0 });  
  useEffect(() => {
    const totalCost = formData.materials.reduce((total: number, material: any) => total + material.totalAmount, 0);
    setFormData((prevData: any) => ({
      ...prevData,
      totalCost,
    }));
  }, [formData.materials]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (productId) {
      dispatch(updateProduct({ id: productId, product: formData }));
    } else {
      dispatch(addProduct({ ...formData, id: Date.now() }));
    }
    navigate('/');
  };

  const handleMaterialAdd = (material: any) => {
    setFormData((prev: any) => ({
      ...prev,
      materials: [...prev.materials, material],
    }));
  };

  return (
    <div className="product-form-container">
      <h1>{productId ? 'Update Product' : 'Add New Product'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="Enter product category"
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="date"
            value={formData.expiry}
            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
            required
          />
        </div>
        <MaterialInput onAdd={handleMaterialAdd} />
        
        <div className="form-group">
          <label>Total Cost of Product:</label>
          <input
            type="text"
            value={formData.totalCost}
            disabled
            placeholder="Total cost will be calculated"
          />
        </div>

        <button type="submit">{productId ? 'Update Product' : 'Save Product'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
