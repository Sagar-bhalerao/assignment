
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { RootState } from '../store/store';

const ProductList = () => {
  const { products} = useSelector((state:RootState)=>state.product);
  console.log(products);
  

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      <table className="product-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Total Cost</th>
            <th>Number of Materials</th>
            <th className="action-cell">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product:any) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.totalCost}</td>
              <td>{product.materials.length}</td>
              <td className="action-cell">
                <Link to={`/update/${product.id}`}>Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
