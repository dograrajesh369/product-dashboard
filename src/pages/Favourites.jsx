import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../features/favourites/favouritesSlice';
import ProductCard from '../components/ProductCard';

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.items);

  const handleToggleFavourite = product => {
    dispatch(removeFavourite(product.id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favourites</h1>

      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favourites.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isFavourite={true}
              onToggleFavourite={() => handleToggleFavourite(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
