// src/pages/ProductList.jsx

import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../features/products/productSlice';
import { addFavourite, removeFavourite } from '../features/favourites/favouritesSlice';

import ProductCard from '../components/ProductCard';
import { debounce } from '../utils/debounce';

const ProductList = () => {
  const dispatch = useDispatch();

  // Global state selectors
  const { items: products, status, error } = useSelector(state => state.products);
  const favourites = useSelector(state => state.favourites?.items || []);

  // Local state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch product data on mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Debounced filter function
  const handleSearch = useCallback(
    debounce(value => {
      const results = products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(results);
    }, 300),
    [products]
  );

  // Handle search input
  const handleInputChange = e => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  // Check if a product is favourited
  const isFavourite = id => favourites.some(product => product.id === id);

  // Add or remove favourite
  const toggleFavourite = product => {
    if (isFavourite(product.id)) {
      dispatch(removeFavourite(product.id));
    } else {
      dispatch(addFavourite(product));
    }
  };

  const displayProducts = searchTerm ? filteredProducts : products;

  // Conditional UI rendering
  if (status === 'loading') return <p className="p-4 text-gray-600">Loading products...</p>;
  if (status === 'failed') return <p className="p-4 text-red-600">Error: {error}</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Product Catalog</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products by title..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.length > 0 ? (
          displayProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isFavourite={isFavourite(product.id)}
              onToggleFavourite={() => toggleFavourite(product)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
