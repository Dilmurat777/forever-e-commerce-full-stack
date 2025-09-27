import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
	const { products } = useContext(ShopContext);
	const [latestProducts, setLatestProducts] = useState([]);
	

	useEffect(() => {
		setLatestProducts(products.slice(0, 10));
	}, [])

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="Latest" text2="Collections" />
        <p className="w-3/4 m-auto text-xs sm:text-s md:text-base text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the.
        </p>
		  </div>
		  {/* rendering products */}
		  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
			  {latestProducts.map((product, index) => (
				  <ProductItem key={index} {...product} />
			  ))}
		  </div>
    </div>
  );
};

export default LatestCollection;
