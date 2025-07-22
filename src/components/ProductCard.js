import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, isFavourite, onToggleFavourite }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition duration-300 ease-in-out">
      <Link
        to={`/product/${product.id}`}
        className="w-full mb-4"
        aria-label={`View details of ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mb-3 transition-transform duration-300 hover:scale-105"
        />
        <h3 className="text-base font-medium text-gray-800 line-clamp-2 h-10">
          {product.title}
        </h3>
        <p className="text-lg font-bold text-blue-600 mt-1">${product.price}</p>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault(); // prevent navigating on button click
          onToggleFavourite();
        }}
        className={`mt-auto px-4 py-1.5 rounded text-sm font-medium transition ${
          isFavourite
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      >
        {isFavourite ? '❤️ Remove' : '🤍 Favourite'}
      </button>
    </div>
  );
};

export default ProductCard;
