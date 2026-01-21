import { useContext } from "react";
import { ProductDataContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";


const Products = () => {

    const productData = useContext(ProductDataContext)

    let renderData = 'Loading...'

    if (productData.length > 0) {
        renderData = productData.map((elem, idx) => (
            <Link
                to={`/products/${elem.id}`}
                key={idx}
                className="w-60 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
                {/* Image */}
                <div className="h-40 flex items-center justify-center mb-3">
                    <img
                        src={elem.image}
                        alt={elem.title}
                        className="h-full object-contain"
                    />
                </div>

                {/* Title */}
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
                    {elem.title}
                </h2>

                {/* Price */}
                <p className="text-green-600 font-bold mb-1">₹ {elem.price}</p>

                {/* Rating */}
                <div className="text-yellow-500 text-sm">
                    ⭐ {elem.rating.rate}
                </div>
            </Link>
        ))
    }

    return (
        <div className="flex flex-wrap gap-6 justify-start">
            { renderData }
        </div>
    );
}

export default Products;
