import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"


const ProductItem = ({ _id, name, image, price, onClick }) => {
	const {currency} = useContext(ShopContext)
  return (
	<Link className="cursor-pointer" to={`/product/${_id}`}  onClick={onClick}>
		  <div className="overflow-hidden">
			  <img className="hover:scale-110 transition ease-in-out" src={image?.[0]} alt="" />
		  </div>
		  <p className="pt-3 pb-1 text-sm">{name}</p>
		  <p className="text-sm font-medium">{currency}{price}</p>
	</Link>
  )
}

export default ProductItem
