import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../features/favourites/favouritesSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.items);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const isFavourite = favourites.some(p => p.id === parseInt(id));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Failed to fetch product', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite({ id: product.id }));
    } else {
      dispatch(addFavourite(product));
    }
  };

  if (loading) return <p className="p-4">Loading product...</p>;
  if (!product) return <p className="p-4 text-red-500">Product not found.</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img src={product.image} alt={product.title} className="w-64 h-64 mx-auto object-contain" />
      <h1 className="text-2xl font-bold my-2">{product.title}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
      <button
        onClick={toggleFavourite}
        className={`mt-4 px-4 py-2 rounded ${
          isFavourite ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {isFavourite ? '❤️ Remove from Favourites' : '🤍 Add to Favourites'}
      </button>
    </div>
  );
};

export default ProductDetail;
